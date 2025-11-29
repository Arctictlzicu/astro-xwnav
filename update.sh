#!/bin/bash
#
# Astro-xwnav 一键更新脚本
# 功能: 更新代码(切换到 Arctictlzicu 仓库)、保留配置、重建镜像、重启容器
#

# --- 配置变量 (需与安装脚本保持一致) ---
REPO_URL="https://github.com/Arctictlzicu/astro-xwnav.git"
PROJECT_DIR="astro-xwnav"
DOCKER_IMAGE_NAME="astro-xwnav"
DOCKER_CONTAINER_NAME="my-nav-site"
HOST_PORT="8899" 

# --- 脚本开始 ---
set -e # 遇到错误立即停止

C_GREEN='\033[0;32m'
C_YELLOW='\033[1;33m'
C_BLUE='\033[0;34m'
C_RED='\033[0;31m'
C_NC='\033[0m'

echo -e "${C_BLUE}===========================================${C_NC}"
echo -e "${C_BLUE} Astro-xwnav 更新脚本启动...            ${C_NC}"
echo -e "${C_BLUE} 目标仓库: Arctictlzicu/astro-xwnav     ${C_NC}"
echo -e "${C_BLUE}===========================================${C_NC}"

# 1. 检查目录是否存在
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${C_RED}错误：找不到目录 $PROJECT_DIR 。${C_NC}"
    echo -e "请确认您是否已安装过该项目，或者您是否在正确的目录下运行此脚本。"
    exit 1
fi

cd "$PROJECT_DIR"

# 2. 备份关键配置文件 (防止 git 操作意外覆盖)
echo -e "\n${C_YELLOW}第一步：备份配置文件...${C_NC}"
if [ -f "src/data/navLinks.js" ]; then
    cp src/data/navLinks.js src/data/navLinks.js.bak_update
    echo -e "${C_GREEN}已备份 src/data/navLinks.js 到 src/data/navLinks.js.bak_update${C_NC}"
else
    echo -e "${C_YELLOW}警告：未找到 src/data/navLinks.js，可能无法保留配置。${C_NC}"
fi

# 3. 更新 Git 代码
echo -e "\n${C_YELLOW}第二步：拉取最新代码...${C_NC}"

# 3.1 强制修改远程仓库地址 (确保指向 Arctictlzicu)
git remote set-url origin "$REPO_URL"
echo -e "Git 远程仓库已设置为: $REPO_URL"

# 3.2 尝试暂存本地修改 (Stash) -> 拉取 (Pull) -> 恢复修改 (Pop)
echo -e "正在暂存您的本地修改..."
git stash

echo -e "正在拉取远程更新..."
if git pull origin main; then
    echo -e "${C_GREEN}代码拉取成功！${C_NC}"
else
    echo -e "${C_RED}代码拉取失败，尝试强制重置分支...${C_NC}"
    # 如果 pull 失败 (通常是因为历史不兼容)，尝试 fetch + reset，然后手动恢复配置
    git fetch --all
    git reset --hard origin/main
    # 尝试恢复之前的配置文件
    if [ -f "src/data/navLinks.js.bak_update" ]; then
        cp src/data/navLinks.js.bak_update src/data/navLinks.js
        echo -e "${C_YELLOW}已强制重置代码并恢复了您的 navLinks.js 备份。${C_NC}"
    fi
fi

# 尝试恢复暂存区 (如果上面用了 stash)
# 注意：如果刚才走了 reset --hard 分支，这里可能会冲突，所以加 || true 忽略错误
git stash pop 2>/dev/null || true

# 4. 更新依赖与图标
echo -e "\n${C_YELLOW}第三步：更新依赖并重新生成图标...${C_NC}"
# 确保 Dockerfile 存在 (防止更新后丢失)
if [ ! -f "Dockerfile" ]; then
    echo -e "${C_RED}警告：Dockerfile 丢失，正在重建...${C_NC}"
    # 重新写入 Dockerfile (保持与安装脚本一致)
cat <<EOF > Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EOF
fi

# 重新写入 nginx.conf (防止更新后丢失)
if [ ! -f "nginx.conf" ]; then
cat <<EOF > nginx.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    error_page 404 /404.html;
}
EOF
fi

# 安装依赖
pnpm install

# 运行图标脚本 (核心步骤)
echo -e "${C_BLUE}运行图标脚本 (0icon.ts)...${C_NC}"
npx tsx ./icon-system/0icon.ts

echo -e "${C_RED}【注意】请检查: 此时若 navLinks.js 格式有误(如缺逗号)，后续构建会失败。${C_NC}"

# 5. 重建并重启 Docker
echo -e "\n${C_YELLOW}第四步：重建并重启 Docker 容器...${C_NC}"

echo -e "停止旧容器..."
docker rm -f "$DOCKER_CONTAINER_NAME" 2>/dev/null || true

echo -e "构建新镜像..."
docker build -t "$DOCKER_IMAGE_NAME" .

echo -e "启动新容器..."
docker run -d -p "${HOST_PORT}:80" --name "$DOCKER_CONTAINER_NAME" --restart always "$DOCKER_IMAGE_NAME"

# 6. 完成
echo -e "\n\n${C_GREEN}===========================================${C_NC}"
echo -e "${C_GREEN} ✅ 更新完成！仓库: Arctictlzicu         ${C_NC}"
echo -e "${C_GREEN}===========================================${C_NC}"
echo -e "${C_YELLOW}当前访问地址: http://<服务器IP>:${HOST_PORT}${C_NC}"