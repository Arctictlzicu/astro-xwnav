/**
 * 这是一个包含了导航网站所有数据的核心文件。
 * 当您需要添加、修改或删除网站时，主要就是编辑这个文件。
 */

/**
 * 网站分类列表
 * @type {Array<{id: string, name: string, icon: string}>}
 */
export const categories = [
  {
    id: 'Studying',
    name: '个人站点', icon: '/icons/category/studying.svg',
  },
  {
    id: 'sy',
    name: '实用网站', icon: '/icons/category/studying.svg',
  },
  {
    id: 'cs',
    name: '测速网站', icon: '/icons/category/studying.svg',
  },
  {
    id: 'proxy',
    name: '代理服务', icon: '/icons/category/studying.svg',
  },
//  {
//    id: 'opensource',
//    name: '开源平台', icon: '/icons/category/opensource.svg',
//  },
  {
    id: 'pages',
    name: '静态部署平台', icon: '/icons/category/pages.svg',
  },
];

/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, category: string}>}
 */
export const sites = [
  // 个人站点
  {
    id: 'sir-red',
    title: '私人搜索引擎',
    description: '一个专注于隐私保护的私人搜索引擎，承诺不追踪、不收集个人信息，提供纯净、无广告的搜索体验。',
    shortDesc: '隐私至上的搜索引擎。',
    url: 'https://sir.red/',
    category: 'Studying',
  },
  {
    id: 'vps-tlz-app',
    title: 'Arctic监控站',
    description: '专业的服务器与网站监控平台，提供实时性能追踪、网络状态告警与资源使用分析，通过直观仪表盘确保您的服务稳定在线。',
    shortDesc: '全方位服务器监控平台。',
    url: 'https://vps.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'dk-tlz-app',
    title: 'Docker中转服务',
    description: '为开发者设计的 Docker 镜像中转服务，旨在解决网络限制问题，加速国内外 Docker Hub 镜像的拉取与推送，显著提升CI/CD与本地开发效率。',
    shortDesc: 'Docker 镜像加速与中转。',
    url: 'https://dk.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'zzmb-tlz-app',
    title: '数据转发服务器',
    description: '稳定、高效的数据中转服务器，专注于提供安全的跨区域数据传输解决方案，适用于 API 代理、数据同步与大文件安全分发。',
    shortDesc: '安全高效的数据转发服务。',
    url: 'https://zzmb.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'cdn-tlz-app',
    title: '私人CDN系统',
    description: '一套可自部署的私人内容分发网络（CDN）系统，赋予您对缓存策略与流量分发的精细化控制权，为您的网站与应用提供全球加速。',
    shortDesc: '自部署的私人 CDN 系统。',
    url: 'https://cdn.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'nas-tlz-app-storage',
    title: '私人存储系统',
    description: '安全、可自托管的个人云存储解决方案，让您的照片、文档等数字资产尽在掌控，随时随地通过多设备加密访问。',
    shortDesc: '自托管的个人云盘。',
    url: 'https://nas.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'zz-tlz-app-file-transfer',
    title: '私人文件临时中转',
    description: '一款注重隐私的临时文件分享工具，支持快速上传并生成具有时效性的分享链接，是传输敏感或大文件的理想选择。',
    shortDesc: '注重隐私的临时文件分享。',
    url: 'https://zz.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'mail-tlz-app-private-mail',
    title: '私人邮件服务器',
    description: '一套独立的私人电子邮件解决方案，让您拥有自己域名的邮箱，完全掌控邮件数据，并通过端到端加密保障通信安全。',
    shortDesc: '独立、安全的域名邮箱。',
    url: 'https://mail.tlz.app/',
    category: 'Studying',
  },
  {
    id: '2211-host',
    title: '私人主DNS服务器',
    description: '作为个人网络架构的核心，此主DNS服务器负责管理所有私人域名的解析记录，提供稳定、快速且可定制的域名解析服务。',
    shortDesc: '私人主DNS服务器。',
    url: 'https://2211.host/',
    category: 'Studying',
  },
  {
    id: 'dns-202229-com',
    title: '私人从DNS服务器',
    description: '作为主DNS服务器的冗余备份，此从DNS服务器自动同步所有解析记录，确保在主服务器不可用时，域名解析服务依然稳定可靠。',
    shortDesc: '私人从DNS服务器。',
    url: 'https://dns.202229.com/',
    category: 'Studying',
  },
  {
    id: 'ai-tlz-app',
    title: '私人GPT',
    description: '一个自托管的私人GPT网站，提供与大型语言模型（LLM）进行交互的能力。完全私有化部署，确保了对话内容的隐私与安全。',
    shortDesc: '自托管的AI聊天机器人。',
    url: 'https://ai.tlz.app/',
    category: 'Studying',
  },
  {
    id: '202229-com',
    title: '私人Gemini',
    description: '一个基于Google Gemini模型的自托管AI聊天网站。通过私有化部署，在享受Gemini强大功能的同时，保证了对话数据的绝对隐私。',
    shortDesc: '自托管的Gemini聊天机器人。',
    url: 'https://202229.com/',
    category: 'Studying',
  },
  {
    id: 'ai-api-tlz-app',
    title: '私人Gemini API 中转',
    description: '为自托管的AI应用提供统一的Gemini API调用接口。通过此中转服务，可以集中管理API密钥、控制访问权限并简化不同应用对Gemini模型的调用。',
    shortDesc: '私人 Gemini API 代理接口。',
    url: 'https://ai.api.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'lx-tlz-app',
    title: '私人单词练习',
    description: '一个用于个人英语学习的单词练习网站。通过自托管的方式，可以根据个人需求定制词库和学习计划，实现高效、私密的单词记忆训练。',
    shortDesc: '自托管的单词记忆工具。',
    url: 'https://lx.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'pdf-tlz-app',
    title: '私人PDF处理',
    description: '一个自托管的在线PDF工具集，提供合并、分割、压缩、转换等多种功能。所有操作均在服务器端完成，确保了文档内容的高度隐私与安全。',
    shortDesc: '自托管的在线PDF工具箱。',
    url: 'https://pdf.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'ip-tlz-app',
    title: '私人网络泄漏测试',
    description: '一个自托管的网络连接分析工具，用于检测IP地址、DNS及WebRTC泄漏情况。通过私有化部署，确保测试过程的绝对隐私与安全。',
    shortDesc: '自托管的网络连接分析工具。',
    url: 'https://ip.tlz.app/',
    category: 'Studying',
  },
  {
    id: "tv-tlz-app-private-video-site",
    title: "私人影视站",
    description: "一个自托管的私人影视站，用于整理和播放在线视频资源，打造个人专属的影音媒体库。",
    shortDesc: "自托管的私人影音库。",
    url: "https://tv.tlz.app/",
    category: "Studying",
  },

  // 代理服务
  {
    id: 'web-200121-sbs-cf-proxy',
    title: '基于CF的网页代理',
    description: '基于 Cloudflare Workers 构建的高性能网页代理，能助您轻松访问全球互联网资源，同时得益于 CF 的全球网络，实现更快的加载速度与更好的隐私保护。',
    shortDesc: '基于 CF 的高性能网页代理。',
    url: 'https://web.200121.sbs/',
    category: 'proxy',
  },
  {
    id: 'us-tlz-app-us-web-proxy',
    title: '美国网页代理',
    description: '提供位于美国的私人网页代理，专为访问受地理位置限制的网页或学术资源而设，有效保护您的网络匿名性。',
    shortDesc: '美国私人网络代理出口。',
    url: 'https://us.tlz.app/',
    category: 'proxy',
  },
  {
    id: 'jp-tlz-app-jp-web-proxy',
    title: '日本网页代理',
    description: '提供位于日本的私人网页代理，专为访问受地理位置限制的网页或学术资源而设，有效保护您的网络匿名性。',
    shortDesc: '日本私人网络代理出口。',
    url: 'https://jp.tlz.app/',
    category: 'proxy',
  },
  {
    id: 'tw-tlz-app-tw-web-proxy',
    title: '台湾网页代理',
    description: '提供位于台湾的的私人网页代理，专为访问受地理位置限制的网页或学术资源而设，有效保护您的网络匿名性。',
    shortDesc: '台湾私人网络代理出口。',
    url: 'https://tw.tlz.app/',
    category: 'proxy',
  },
  {
    id: 'xz-tlz-app-proxy',
    title: '私人网络代理',
    description: '专业的私人网络代理服务，旨在帮助用户建立安全、私密的网络连接，以隐藏真实IP、绕过地理限制并加密网络流量。',
    shortDesc: '安全、私密的网络代理。',
    url: 'https://xz.tlz.app/',
    category: 'proxy',
  },
  // 实用网站
  {
    id: 'browserleaks-webrtc-leak-test',
    title: 'WebRTC 泄漏测试',
    description: '强大的在线隐私检测工具，用于检查您的浏览器是否存在 WebRTC 漏洞，该漏洞可能在您使用VPN时暴露您的真实IP地址。',
    shortDesc: '检测 WebRTC IP 泄露风险。',
    url: 'https://browserleaks.com/webrtc',
    category: 'sy',
  },
  {
    id: 'ipleak-net-dns-detection-platform',
    title: 'DNS 泄漏测试',
    description: '全面的网络身份检测平台，用于识别您的DNS服务器、查询IP地址、评估VPN或代理连接的有效性，确保您的隐私得到保护。',
    shortDesc: '全面检测DNS与网络身份。',
    url: 'https://ipleak.net/',
    category: 'sy',
  },
  {
    id: 'ipinfo-io-ip-information-query',
    title: 'IP 信息查询',
    description: '广泛使用的IP地址信息查询服务，可快速获取任一IP的地理位置、ISP、组织归属等详细网络数据，是网络诊断和分析的必备工具。',
    shortDesc: '查询 IP 地址的详细信息。',
    url: 'https://ipinfo.io/',
    category: 'sy',
  },
  {
    id: 'tailscale-admin-machines-remote-networking',
    title: 'Tailscale 异地组网',
    description: '基于 WireGuard 的零配置虚拟专用网络，能将您所有设备安全地连接成一个私有网络，无论身处何地，访问家庭或办公设备都如在内网般简单。',
    shortDesc: '简单、安全的异地组网。',
    url: 'https://login.tailscale.com/admin/machines',
    category: 'sy',
  },
  {
    id: 'windy-global-weather-check',
    title: 'Windy 全球气象',
    description: '卓越的全球气象可视化工具，通过交互式地图实时展示风、温度、降水等多维气象数据，是户外活动与专业分析的得力助手。',
    shortDesc: '专业级全球天气可视化。',
    url: 'https://www.windy.com/?26.293,112.939,5,p:temp',
    category: 'sy',
  },
  {
    id: 'itdog-ip-connection-check',
    title: 'ITDog 网络监测',
    description: '一款实用的网络诊断工具集，提供 Ping、Traceroute、DNS查询等多种功能，帮助您快速检测服务器的全球连通性与网络延迟。',
    shortDesc: '服务器全球连通性监测。',
    url: 'https://www.itdog.cn/',
    category: 'sy',
  },
  // 测速网站
  {
    id: 'fast-com-speed-test',
    title: 'Fast.com 网速测试',
    description: '由 Netflix 提供的极简在线网速测试工具，专注于快速测量您的互联网下载速度，是评估流媒体视频体验的绝佳选择。',
    shortDesc: '快速测试互联网下载速度。',
    url: 'https://fast.com/',
    category: 'cs',
  },
  {
    id: 'cloudflare-speed-test',
    title: 'Cloudflare 网速测试',
    description: 'Cloudflare 出品的综合性网络性能测试工具，不仅测量下载和上传速度，还提供详细的延迟、抖动和丢包率等数据，评估网络综合质量。',
    shortDesc: '综合网络性能测试工具。',
    url: 'https://speed.cloudflare.com/',
    category: 'cs',
  },
  {
    id: 'speedtest-net',
    title: 'Speedtest by Ookla',
    description: '全球最流行的互联网速度测试服务之一，提供覆盖全球的测试节点，可快速、准确地测量您的下载、上传速度和网络延迟。',
    shortDesc: '全球流行的网速测试服务。',
    url: 'https://www.speedtest.net/',
    category: 'cs',
  },
  {
    id: 'network-panel-traffic-killer',
    title: '流量杀手',
    description: '一款开源的浏览器扩展功能，用于生成大量网络请求以消耗流量或进行带宽压力测试，适用于测试网络稳定性与服务商的流量策略。',
    shortDesc: '带宽压力与流量消耗测试。',
    url: 'https://ljxi.github.io/NetworkPanel/',
    category: 'cs',
  },
  // 静态部署平台
  {
    id: 'cloudflare-pages',
    title: 'Cloudflare Pages',
    description: '一个为前端开发者打造的高性能 Jamstack 平台，利用 Cloudflare 的全球边缘网络提供极致的加载速度、无缝的 Git 集成和强大的预览功能。',
    shortDesc: '基于全球边缘网络的前端部署。',
    url: 'https://pages.cloudflare.com/',
    category: 'pages',
  },
  {
    id: 'vercel',
    title: 'Vercel',
    description: '由 Next.js 背后的团队打造，专为现代 Web 应用设计的前端云平台，提供零配置部署、自动扩缩容和全球边缘网络，赋能极致开发体验。',
    shortDesc: '为极致开发体验而生的前端云。',
    url: 'https://vercel.com/',
    category: 'pages',
  },
];