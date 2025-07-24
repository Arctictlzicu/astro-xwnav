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
  {
    id: 'opensource',
    name: '开源平台', icon: '/icons/category/opensource.svg',
  },
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
    title: 'Sir.red',
    description: '一款高度注重用户隐私的私人搜索引擎。我们承诺绝不追踪或收集任何个人信息，为您提供一个纯粹、无广告且值得信赖的搜索环境。',
    shortDesc: '无追踪，纯净搜索体验。',
    url: 'https://sir.red/',
    category: 'Studying',
  },
  {
    id: 'vps-tlz-app',
    title: 'Arctic 监控站',
    description: '一款专业的服务器与网站监控平台，提供实时的性能追踪、智能网络状态告警及深入的资源使用分析。通过其直观的仪表盘，轻松确保您的服务持续稳定在线。',
    shortDesc: '实时监控，保障服务稳定。',
    url: 'https://vps.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'dk-tlz-app',
    title: 'Docker 中转服务',
    description: '专为开发者打造的 Docker 镜像中转服务。有效解决网络限制，实现国内外 Docker Hub 镜像的快速拉取与推送，从而显著提升 CI/CD 流程与本地开发的效率。',
    shortDesc: '加速 Docker 镜像拉取推送。',
    url: 'https://dk.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'zzmb-tlz-app',
    title: '数据中转服务器',
    description: '提供稳定、高效且安全的数据中转解决方案。专注于跨区域数据传输，是 API 代理、数据同步和敏感大文件安全分发的理想选择。',
    shortDesc: '安全高效的数据中转服务。',
    url: 'https://zzmb.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'cdn-tlz-app',
    title: '私人CDN系统',
    description: '一套可自由部署的私人内容分发网络(CDN)系统。让您完全掌控缓存策略与流量分发，为您的网站与应用提供可靠的全球加速服务。',
    shortDesc: '可自部署的私有 CDN 系统。',
    url: 'https://cdn.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'nas-tlz-app-storage',
    title: '私人存储系统',
    description: '一个安全、可自托管的个人云存储解决方案。让您的照片、文档等数字资产尽在掌控，支持多设备加密访问，随时随地安全存取。',
    shortDesc: '可自托管的个人云盘。',
    url: 'https://nas.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'zz-tlz-app-file-transfer',
    title: '私人文件临时中转',
    description: '一款注重隐私的临时文件分享工具。支持快速上传并生成具有时效性的安全分享链接，是传输敏感文件或超大文件的理想选择。',
    shortDesc: '注重隐私的临时文件分享。',
    url: 'https://zz.tlz.app/',
    category: 'Studying',
  },
  {
    id: 'mail-tlz-app-private-mail',
    title: '私人邮件服务器',
    description: '一套完全独立的私人电子邮件解决方案。让您拥有并完全掌控自有域名的邮箱，通过端到端加密，为您的通信安全提供终极保障。',
    shortDesc: '独立、安全的域名邮箱。',
    url: 'https://mail.tlz.app/',
    category: 'Studying',
  },
  // 代理服务
  {
    id: 'web-200121-sbs-cf-proxy',
    title: '网页代理 (CF)',
    description: '基于 Cloudflare Workers 构建的高性能网页代理服务。利用 Cloudflare 的全球网络，助您轻松访问互联网资源，实现更快的加载与更强的隐私保护。',
    shortDesc: '基于 CF 的高性能网页代理。',
    url: 'https://web.200121.sbs/',
    category: 'proxy',
  },
  {
    id: 'us-tlz-app-us-web-proxy',
    title: '美国网页代理',
    description: '提供位于美国的私人网络代理出口。专为访问受地理位置限制的流媒体、电商平台或学术资源设计，有效保障您的网络匿名性。',
    shortDesc: '美国私人网络代理出口。',
    url: 'https://us.tlz.app/',
    category: 'proxy',
  },
  {
    id: 'jp-tlz-app-jp-web-proxy',
    title: '日本网络代理',
    description: '提供位于日本的私人网络代理出口。可用于顺畅访问日本地区限定的流媒体、游戏或新闻内容，同时有效增强您的在线隐私。',
    shortDesc: '日本私人网络代理出口。',
    url: 'https://jp.tlz.app/',
    category: 'proxy',
  },
  {
    id: 'tw-tlz-app-tw-web-proxy',
    title: '台湾网页代理',
    description: '提供位于台湾的私人网络代理出口。主要用于访问台湾地区限制的流媒体服务、新闻网站或特定线上应用，保障访问顺畅。',
    shortDesc: '台湾私人网络代理出口。',
    url: 'https://tw.tlz.app/',
    category: 'proxy',
  },
  {
    id: 'xz-tlz-app-proxy',
    title: '私人网络代理',
    description: '一项专业的私人网络代理服务，旨在帮助用户建立安全、私密的网络连接，以隐藏真实IP、突破地理限制并全程加密网络流量。',
    shortDesc: '安全、私密的网络代理。',
    url: 'https://xz.tlz.app/',
    category: 'proxy',
  },
  // 实用网站
  {
    id: 'browserleaks-webrtc-leak-test',
    title: 'WebRTC 泄漏测试',
    description: '一款强大的在线隐私检测工具，可即时检查您的浏览器是否存在 WebRTC 漏洞。该漏洞可能在您使用VPN时暴露您的真实IP地址。',
    shortDesc: '检测 WebRTC IP 泄露风险。',
    url: 'https://browserleaks.com/webrtc',
    category: 'sy',
  },
  {
    id: 'ipleak-net-dns-detection-platform',
    title: 'DNS 泄漏测试',
    description: '一个全面的网络身份检测平台，可用于识别DNS服务器、查询IP地址、评估VPN或代理连接的匿名性，确保您的真实网络身份得到保护。',
    shortDesc: '全面检测DNS与网络身份。',
    url: 'https://ipleak.net/',
    category: 'sy',
  },
  {
    id: 'ipinfo-io-ip-information-query',
    title: 'IP 信息查询',
    description: '一个广泛使用的IP地址信息查询服务。可快速获取任一IP的详细数据，包括地理位置、ISP、组织归属等，是网络诊断和分析的必备工具。',
    shortDesc: '查询 IP 地址的详细信息。',
    url: 'https://ipinfo.io/',
    category: 'sy',
  },
  {
    id: 'tailscale-admin-machines-remote-networking',
    title: 'Tailscale 异地组网',
    description: '基于 WireGuard 的零配置虚拟专用网络(VPN)。它能将您所有设备安全地连接成一个私有网络，无论身处何地，访问设备都如在内网般简单。',
    shortDesc: '简单、安全的异地组网。',
    url: 'https://login.tailscale.com/admin/machines',
    category: 'sy',
  },
  {
    id: 'windy-global-weather-check',
    title: 'Windy 全球气象',
    description: '一款卓越的全球气象可视化工具。通过交互式地图实时展示风、温、降水等多维度气象数据，是户外活动与专业气象分析的得力助手。',
    shortDesc: '专业级全球天气可视化。',
    url: 'https://www.windy.com/?26.293,112.939,5,p:temp',
    category: 'sy',
  },
  {
    id: 'itdog-ip-connection-check',
    title: 'ITDog 网络监测',
    description: '一个实用的在线网络诊断工具集。它提供 Ping、Traceroute、DNS查询等多种功能，帮助您从全球多个节点快速检测服务器的连通性与网络延迟。',
    shortDesc: '服务器全球连通性监测。',
    url: 'https://www.itdog.cn/',
    category: 'sy',
  },
  // 测速网站
  {
    id: 'fast-com-speed-test',
    title: 'Fast.com 网速测试',
    description: '由 Netflix 官方提供的极简在线网速测试工具。它专注于快速、准确地测量您的互联网下载速度，是评估流媒体视频体验的绝佳选择。',
    shortDesc: '快速测试互联网下载速度。',
    url: 'https://fast.com/',
    category: 'cs',
  },
  {
    id: 'cloudflare-speed-test',
    title: 'Cloudflare 网速测试',
    description: '由 Cloudflare 出品的综合性网络性能测试工具。它不仅测量下载和上传速度，还提供延迟、抖动和丢包率等详细数据，用于全面评估网络质量。',
    shortDesc: '综合网络性能测试工具。',
    url: 'https://speed.cloudflare.com/',
    category: 'cs',
  },
  {
    id: 'speedtest-net',
    title: 'Speedtest by Ookla',
    description: '全球最流行的互联网速度测试服务之一。它在全球拥有海量测试节点，能够快速、准确地测量您的下载、上传速度以及网络延迟(Ping)。',
    shortDesc: '全球流行的网速测试服务。',
    url: 'https://www.speedtest.net/',
    category: 'cs',
  },
  {
    id: 'network-panel-traffic-killer',
    title: '流量杀手',
    description: '一款开源的浏览器在线工具，可通过生成大量并发网络请求来消耗带宽。适用于进行网络稳定性或服务商流量策略的压力测试。',
    shortDesc: '带宽压力与流量消耗测试。',
    url: 'https://ljxi.github.io/NetworkPanel/',
    category: 'cs',
  },
  // 静态部署平台
  {
    id: 'cloudflare-pages',
    title: 'Cloudflare Pages',
    description: '一个为前端开发者打造的高性能 Jamstack 平台。它利用 Cloudflare 的全球边缘网络，提供极致的加载速度、无缝的 Git 集成和强大的预览部署功能。',
    shortDesc: '基于全球边缘网络的前端部署。',
    url: 'https://pages.cloudflare.com/',
    category: 'pages',
  },
  {
    id: 'vercel',
    title: 'Vercel',
    description: '由 Next.js 背后的团队打造，专为现代 Web 应用而生的前端云平台。提供零配置部署、自动扩缩容和全球边缘网络，赋能极致的开发与用户体验。',
    shortDesc: '为极致开发体验而生的前端云。',
    url: 'https://vercel.com/',
    category: 'pages',
  },
];