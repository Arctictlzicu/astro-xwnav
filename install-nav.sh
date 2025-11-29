#!/bin/bash
#
# Astro-xwnav 一键安装脚本 (Port 8899)
# 功能: 自动化安装 Docker, Node.js, pnpm, 克隆项目并创建配置文件。
#

# --- 配置变量 ---
REPO_URL="https://github.com/Arctictlzicu/astro-xwnav.git"
PROJECT_DIR="astro-xwnav"
DOCKER_IMAGE_NAME="astro-xwnav"
DOCKER_CONTAINER_NAME="my-nav-site"
HOST_PORT="8899" # ===> 已修改为 8899 端口 <===

# --- 脚本开始 ---

# 设置 -e: 如果任何命令失败，脚本将立即退出
set -e

# 定义颜色，让输出更易读
C_GREEN='\033[0;32m'
C_YELLOW='\033[1;33m'
C_BLUE='\033[0;34m'
C_NC='\033[0m' # No Color

# 欢迎信息
echo -e "${C_BLUE}===========================================${C_NC}"
echo -e "${C_BLUE} Astro-xwnav 自动化安装脚本启动...         ${C_NC}"
echo -e "${C_BLUE} 仓库源: ${REPO_URL} ${C_NC}"
echo -e "${C_BLUE} 目标端口: ${HOST_PORT} ${C_NC}"
echo -e "${C_BLUE}===========================================${C_NC}"

# --- 1. 系统环境准备 ---
echo -e "\n${C_YELLOW}第一步：更新系统并安装基础依赖 (git, curl)...${C_NC}"
sudo apt-get update
sudo apt-get install -y git curl ca-certificates gnupg lsb-release

# --- 2. 安装 Docker ---
if ! command -v docker &> /dev/null; then
    echo -e "\n${C_YELLOW}第二步：检测到 Docker 未安装，现在开始安装...${C_NC}"
    
    # 准备 Keyrings 目录
    sudo install -m 0755 -d /etc/apt/keyrings
    
    # 下载 Docker GPG Key
    curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg

    # 自动识别系统架构和版本代号 (默认针对 Debian/Ubuntu)
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    
    # 安装 Docker Engine
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    
    # 将当前用户添加到 docker 组
    sudo usermod -aG docker $USER
    echo -e "${C_GREEN}Docker 安装完成！${C_NC}"
else
    echo -e "\n${C_GREEN}第二步：Docker 已安装，跳过。${C_NC}"
fi

# --- 3. 安装 Node.js 和 pnpm ---
if ! command -v pnpm &> /dev/null; then
    echo -e "\n${C_YELLOW}第三步：安装 Node.js 和 pnpm...${C_NC}"
    # 安装 Node.js (LTS v18)
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
    # 安装 pnpm
    sudo npm install -g pnpm
    echo -e "${C_GREEN}Node.js 和 pnpm 安装完成。${C_NC}"
else
    echo -e "\n${C_GREEN}第三步：pnpm 已安装，跳过。${C_NC}"
fi

# --- 4. 克隆项目代码 ---
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "\n${C_YELLOW}第四步：克隆 Astro-xwnav 项目代码...${C_NC}"
    echo -e "正在从 ${REPO_URL} 克隆..."
    git clone "$REPO_URL" "$PROJECT_DIR"
    echo -e "${C_GREEN}项目已克隆到 ./${PROJECT_DIR}/ 目录。${C_NC}"
else
    echo -e "\n${C_GREEN}第四步：项目目录 ./${PROJECT_DIR}/ 已存在，跳过克隆。${C_NC}"
    echo -e "${C_YELLOW}提示：如果需要更新代码，请手动进入目录执行 git pull${C_NC}"
fi

# 进入项目目录
cd "$PROJECT_DIR"

# --- 5. 创建 Docker 配置文件 ---
echo -e "\n${C_YELLOW}第五步：创建 Dockerfile 和 nginx.conf...${C_NC}"

# 创建 Dockerfile
cat <<EOF > Dockerfile
# --- STAGE 1: Build the application ---
FROM node:18-alpine AS builder
WORKDIR /app
# 安装 pnpm
RUN npm install -g pnpm
# 复制依赖文件
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# 复制源代码
COPY . .

# 注意：图标生成脚本通常建议在本地运行，以免在Docker构建中出错
# 如果您确定脚本无误，可以取消下面这行的注释
# RUN npx tsx ./icon-system/0icon.ts

# 构建 Astro 项目
RUN pnpm build

# --- STAGE 2: Create the final production image ---
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EOF

# 创建 nginx.conf
cat <<EOF > nginx.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    
    error_page 404 /404.html;
}
EOF

echo -e "${C_GREEN}Dockerfile 和 nginx.conf 配置完成！${C_NC}"

# --- 6. 完成与后续步骤说明 ---
echo -e "\n\n${C_GREEN}===========================================${C_NC}"
echo -e "${C_GREEN} ✅ 自动化环境准备已全部完成！            ${C_NC}"
echo -e "${C_GREEN}===========================================${C_NC}"
echo -e "\n${C_YELLOW}接下来，请按照以下步骤完成部署：${C_NC}"

echo -e "\n${C_BLUE}1. 进入项目目录:${C_NC}"
echo -e "   cd ${PROJECT_DIR}"

echo -e "\n${C_BLUE}2. 安装依赖:${C_NC}"
echo -e "   pnpm install"

echo -e "\n${C_BLUE}3. 运行图标抓取脚本 (重要):${C_NC}"
echo -e "   npx tsx ./icon-system/0icon.ts"
echo -e "   ${C_YELLOW}注意：脚本运行后，请检查 src/data/navLinks.js 格式是否正确 (如缺少逗号)。${C_NC}"

echo -e "\n${C_BLUE}4. 构建并启动 Docker 容器:${C_NC}"
echo -e "   docker build -t ${DOCKER_IMAGE_NAME} ."
echo -e "   docker run -d -p ${HOST_PORT}:80 --name ${DOCKER_CONTAINER_NAME} ${DOCKER_IMAGE_NAME}"

echo -e "\n${C_YELLOW}部署成功后访问: http://<服务器IP>:${HOST_PORT}${C_NC}"