/**
统一分类opensource
网站：
github
baidu.com
谷歌
具体按照以下样式生成，使用“JavaScript风格格式+单引号”，不要添加"icon字段"和"[]""      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。'
      shortDesc: '代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      },
描述根据网站实际内容,专业,准确,介绍背景独特优势等等,不要太刻板,臃肿,重复
自动下载图标脚本执行:
npx tsx icon-system/0icon.ts
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
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, icon: string, category: string}>}
 */
export const sites = [

  //个人其他站点      
      {
        id: 'sir-red',
        title: 'Sir.red',
        description: 'Sir.red 是一个专注于隐私保护的私人搜索引擎，它承诺不追踪用户行为，不收集个人信息，为您提供一个干净、无广告的搜索体验。通过先进的算法，Sir.red 致力于在保护您隐私的同时，提供高效准确的搜索结果。',
        shortDesc: '注重隐私的私人搜索引擎。',
        url: 'https://sir.red/',
        category: 'Studying',
      },
      {
        id: 'vps-tlz-app',
        title: 'Arctic 监控站 (vps.tlz.app)',
        description: 'Arctic 监控站 (vps.tlz.app) 提供专业的 VPS 监控服务，帮助您实时追踪服务器性能、网络状态和资源使用情况。通过直观的仪表盘和详细的报告，您可以轻松管理和优化您的 VPS 部署，确保业务的稳定运行。',
        shortDesc: '专业的 VPS 监控服务。',
        url: 'https://vps.tlz.app/',
        category: 'Studying',
      },
      {
        id: 'dk-tlz-app',
        title: 'Docker 中转服务 (dk.tlz.app)',
        description: 'dk.tlz.app 提供便捷的 Docker 中转服务，旨在简化 Docker 镜像的拉取和推送过程。无论您是在国内还是海外，都可以通过此服务加速 Docker 镜像的传输，提高开发和部署效率。',
        shortDesc: '便捷的 Docker 镜像中转服务。',
        url: 'https://dk.tlz.app/',
        category: 'Studying',
      },
      {
        id: 'zzmb-tlz-app',
        title: '数据中转服务器 (zzmb.tlz.app)',
        description: 'zzmb.tlz.app 提供稳定可靠的数据中转服务器服务，专注于为用户提供高效、安全的数据传输解决方案。无论您是需要进行数据同步、文件传输还是API代理，此服务都能满足您的需求，确保数据流畅、安全地抵达目的地。',
        shortDesc: '稳定可靠的数据中转服务器。',
        url: 'https://zzmb.tlz.app/',
        category: 'Studying',
      },
      {
        id: 'cdn-tlz-app',
        title: '私人CDN系统 (cdn.tlz.app)',
        description: 'cdn.tlz.app 致力于构建一个高效、可定制的私人CDN系统。该系统允许用户轻松部署和管理自己的内容分发网络，加速静态资源的传输，提升网站和应用的访问速度和用户体验。适用于需要精细化控制内容分发和缓存策略的场景。',
        shortDesc: '高效、可定制的私人CDN系统。',
        url: 'https://cdn.tlz.app/',
        category: 'Studying',
      },
      {
        "id": "web-200121-sbs-cf-proxy",
        "title": "web.200121.sbs - 基于 Cloudflare 的网页代理",
        "description": "web.200121.sbs 是一个利用 Cloudflare（CF）技术搭建的网页代理服务。这类服务通常允许用户通过代理服务器访问被限制或屏蔽的网站，或者用于隐藏用户的真实 IP 地址。通过 Cloudflare 的 CDN 和代理能力，它可能提供更快的访问速度和更好的可用性，同时也能帮助规避一些网络审查或地理位置限制。用户可以在该网站输入目标网址，然后通过代理服务器加载该网页。",
        "shortDesc": "一个利用 Cloudflare (CF) 搭建的网页代理服务，用于访问受限网站或匿名浏览。",
        "url": "https://web.200121.sbs/",
        "category": "Studying",
      },
      {
        "id": "us-tlz-app-us-web-proxy",
        "title": "us.tlz.app - 私人美国网页代理",
        "description": "us.tlz.app 被描述为一个私人的美国网页代理。这意味着它提供了一个位于美国的服务器作为中介，允许用户通过该服务器访问互联网。这样的代理服务通常用于：\n\n*   **访问美国地区限制的内容**: 许多流媒体服务、网站或应用程序的内容是根据用户所在的地理位置进行限制的，使用美国代理可以绕过这些限制。\n*   **增强隐私和匿名性**: 通过代理访问网站，用户的真实 IP 地址会被隐藏，取而代之的是代理服务器的 IP 地址，这有助于提高在线隐私。\n*   **规避审查**: 在某些地区，互联网访问可能受到限制或审查，使用位于其他国家的代理可以帮助用户访问被屏蔽的信息。\n\n“私人”一词可能暗示该服务承诺不记录用户的浏览活动，或者提供更高级别的安全和隐私保护。",
        "shortDesc": "提供一个私人的、位于美国的网页代理服务，用于访问美国地区限制内容和增强隐私。",
        "url": "https://us.tlz.app/",
        "category": "Studying",
      },
      {
        "id": "jp-tlz-app-jp-web-proxy",
        "title": "jp.tlz.app - 私人日本网络代理",
        "description": "jp.tlz.app 是一个提供私人日本网络代理服务的网站。与其他的网页代理类似，它允许用户通过位于日本的服务器来浏览网页。这通常用于以下目的：\n\n*   **访问日本地区限定的内容**: 许多日本的流媒体服务、游戏、新闻网站或电子商务平台的内容仅对日本国内用户开放。使用日本代理可以帮助用户绕过地理位置限制，访问这些内容。\n*   **提高在线隐私**: 通过代理服务器访问网络，用户的真实 IP 地址会被隐藏，取而代之的是代理服务器的 IP 地址，从而增强匿名性。\n*   **规避网络审查**: 在某些情况下，用户可能面临网络访问限制，使用位于其他国家的代理服务器可以帮助他们访问被屏蔽的网站或信息。\n\n“私人”一词暗示该服务可能致力于保护用户隐私，例如不记录用户的浏览历史。",
        "shortDesc": "提供一个私人的、位于日本的网络代理服务，用于访问日本地区限制内容和增强隐私。",
        "url": "https://jp.tlz.app/",
        "category": "Studying",
      },
      {
        "id": "tw-tlz-app-tw-web-proxy",
        "title": "tw.tlz.app - 私人的台湾网页代理",
        "description": "tw.tlz.app 被描述为一个私人的台湾网页代理。这意味着它提供了一个位于台湾的服务器作为中介，允许用户通过该服务器访问互联网。这类代理服务通常用于：\n\n*   **访问台湾地区限制的内容**: 许多台湾的流媒体服务、新闻网站、在线游戏或特定网站的内容是根据用户所在地理位置进行限制的。使用台湾代理可以帮助用户绕过这些地理限制。\n*   **增强隐私和匿名性**: 通过代理访问网站，用户的真实 IP 地址会被隐藏，取而代之的是代理服务器的 IP 地址，这有助于提高在线隐私和匿名性。\n*   **规避审查或网络限制**: 在某些情况下，用户可能面临网络访问限制，使用位于其他国家的代理可以帮助他们访问被屏蔽的信息。\n\n“私人”一词可能表明该服务承诺不记录用户的浏览活动，或提供更高级别的安全和隐私保护。",
        "shortDesc": "提供一个私人的、位于台湾的网页代理服务，用于访问台湾地区限制内容和增强隐私。",
        "url": "https://tw.tlz.app/",
        "category": "proxy",
      },

      {
        id: 'xz-tlz-app-proxy',
        title: '私人网络代理 (xz.tlz.app)',
        description: 'xz.tlz.app 提供专业的私人网络代理服务，帮助用户建立安全、私密的网络连接。您可以利用此服务来隐藏您的真实IP地址、绕过地理限制、加密网络流量，从而在互联网上获得更高的隐私性和安全性。',
        shortDesc: '安全、私密的网络代理服务。',
        url: 'https://xz.tlz.app/',
        category: 'Studying',
      },
      {
        id: 'nas-tlz-app-storage',
        title: '私人存储系统 (nas.tlz.app)',
        description: 'nas.tlz.app 提供强大的私人存储系统，让您能够安全、便捷地管理和访问您的个人文件。您可以将照片、视频、文档等重要数据存储在云端，并随时随地通过各种设备进行访问和共享。该系统注重数据安全和隐私保护，是您数字资产的可靠归宿。',
        shortDesc: '安全、便捷的私人云存储。',
        url: 'https://nas.tlz.app/',
        category: 'Studying',
      },
      {
        id: 'zz-tlz-app-file-transfer',
        title: '私人文件临时中转 (zz.tlz.app)',
        description: 'zz.tlz.app 提供高效、安全的私人文件临时中转服务。您可以快速上传文件，并生成一个临时的下载链接，方便与他人分享。该服务注重隐私，链接通常具有时效性，确保您的文件在传输完成后不再轻易被访问。是临时分享大文件或敏感文件的理想选择。',
        shortDesc: '快速、安全的临时文件分享。',
        url: 'https://zz.tlz.app/',
        category: 'Studying',
      },
      {
        id: 'mail-tlz-app-private-mail',
        title: '私人邮件服务器 (mail.tlz.app)',
        description: 'mail.tlz.app 致力于提供一个安全、私密的电子邮件解决方案。作为您的私人邮件服务器，它允许您拥有独立的域名邮箱，并提供端到端的加密选项，以保护您的通信内容免受未经授权的访问。您可以完全掌控您的邮件数据，享受更高级别的隐私和控制权。',
        shortDesc: '安全、私密的独立域名邮箱。',
        url: 'https://mail.tlz.app/',
        category: 'Studying',
      },
      //实用
      {
        id: 'browserleaks-webrtc-leak-test',
        title: 'WebRTC 泄漏测试 (browserleaks.com)',
        description: 'browserleaks.com/webrtc 是一个强大的在线工具，用于检测您的浏览器是否存在 WebRTC 泄漏问题。WebRTC（Web Real-Time Communications）是一项允许浏览器进行实时通信的技术，但有时可能会意外暴露您的真实 IP 地址，即使您正在使用 VPN。此测试可以帮助您识别并解决潜在的隐私风险。',
        shortDesc: '检测您的浏览器 WebRTC IP 泄漏。',
        url: 'https://browserleaks.com/webrtc',
        category: 'sy',
      },
      {
        id: 'ipleak-net-dns-detection-platform',
        title: 'DNS 检测平台 (ipleak.net)',
        description: 'ipleak.net 是一个全面的在线平台，用于检测您的 DNS（域名系统）设置和潜在泄漏。它能够识别您的 DNS 服务器、查询您的真实 IP 地址、检查您的浏览器指纹信息，并评估您的 VPN 或代理连接的有效性。通过 ipleak.net，您可以了解您的网络身份信息，并确保您的隐私得到保护。',
        shortDesc: '全面检测您的 DNS 设置和网络身份。',
        url: 'https://ipleak.net/',
        category: 'sy',
      },
      {
        id: 'ipinfo-io-ip-information-query',
        title: 'IP 信息查询 (ipinfo.io)',
        description: 'ipinfo.io 是一个广泛使用的 IP 地址信息查询服务。它允许您快速获取关于任何 IP 地址的详细信息，包括地理位置（国家、地区、城市）、ISP（互联网服务提供商）、组织、ASN（自治系统编号）以及其他相关的网络数据。这个工具对于网络管理员、安全分析师或任何需要了解 IP 地址来源和属性的人来说都非常有用。',
        shortDesc: '快速查询 IP 地址的详细信息。',
        url: 'https://ipinfo.io/',
        category: 'sy',
      },
      {
        id: 'tailscale-admin-machines-remote-networking',
        title: '异地组网 (Tailscale)',
        description: 'Tailscale 是一个易于使用的异地组网工具，它利用 WireGuard 技术创建一个安全的、私有的网络，将您的所有设备连接起来，无论它们身处何地。通过 Tailscale，您可以轻松地访问家庭服务器、办公电脑或任何其他连接的设备，就像它们在同一个局域网中一样。其管理后台 (login.tailscale.com/admin/machines) 提供了对您网络中所有设备的直观管理界面，包括查看在线状态、分配 IP 地址以及管理访问权限。',
        shortDesc: '安全、简单地连接您所有设备，实现异地组网。',
        url: 'https://login.tailscale.com/admin/machines',
        category: 'sy',
      },
      {
        id: 'windy-global-weather-check',
        title: '全球气象检查 (Windy.com)',
        description: 'Windy.com 是一个功能强大的全球气象可视化工具，它提供了一个交互式的地图界面，展示来自多个气象模型的实时和预测数据。用户可以轻松地查看风速、风向、温度、降水、云层、湿度、气压等各种气象参数，并可以自由缩放和移动地图以探索不同地区的天气状况。它尤其以其精细的风场可视化而闻名，非常适合风帆冲浪、滑翔伞、飞行等户外活动爱好者，以及需要了解全球天气模式的专业人士。URL 中的参数 `?26.293,112.939,5,p:temp` 指定了地图的中心位置（纬度26.293，经度112.939），缩放级别为5，并以温度（temp）作为主要显示图层。',
        shortDesc: '可视化全球天气，包括风、温度、降水等。',
        url: 'https://www.windy.com/?26.293,112.939,5,p:temp',
        category: 'sy',
      },
      {
        id: 'itdog-ip-connection-check',
        title: 'IP 连接线检查 (ITDog.cn)',
        description: 'ITDog.cn 是一个提供网络诊断和信息查询的网站，其中“IP连接线检查”功能可以帮助用户检测特定IP地址或域名的网络连通性和延迟情况。通过模拟网络请求，它可以显示数据包在网络传输过程中的路由路径、丢包率和响应时间，从而帮助用户诊断网络问题，例如连接缓慢、丢包或无法访问特定服务器。这对于网络管理员、开发人员或任何需要了解网络性能的用户都非常有价值。',
        shortDesc: '检测IP地址的连通性和网络路径。',
        url: 'https://www.itdog.cn/',
        category: 'sy',
      },
      //测速
      {
        id: 'fast-com-speed-test',
        title: '网速测试 (Fast.com)',
        description: 'Fast.com 是一个由 Netflix 提供的简单易用的在线网速测试工具。它专注于测量您的互联网下载速度，这是影响流媒体服务（如观看 Netflix 视频）体验的关键因素。只需访问网站，它就会自动开始测试，并显示您的下载速度。您还可以点击“显示更多信息”来查看上传速度和延迟（ping）等更详细的网络性能数据。这个工具非常适合快速评估您的网络连接质量。',
        shortDesc: '简单快速地测试您的互联网下载速度。',
        url: 'https://fast.com/',
        category: 'cs',
      },
      {
        id: 'cloudflare-speed-test',
        title: 'Cloudflare 网速测试',
        description: 'Cloudflare Speed Test 是由 Cloudflare 提供的一项全面的互联网速度测试工具。它不仅测量您的下载和上传速度，还提供详细的延迟（ping）和抖动（jitter）数据，这些对于在线游戏、视频会议等实时应用至关重要。该工具通过连接到 Cloudflare 的全球网络中的不同服务器来测试您的连接性能，以提供更准确的基准。您可以选择不同的测试服务器位置，并查看详细的测试结果，包括丢包率等信息。',
        shortDesc: '全面测试您的下载、上传速度、延迟和抖动。',
        url: 'https://speed.cloudflare.com/',
        category: 'cs',
      },
      {
        id: 'speedtest-net',
        title: 'Speedtest.net by Ookla',
        description: 'Speedtest.net by Ookla 是全球最受欢迎的互联网速度测试之一。它提供了一个用户友好的界面，可以快速测试您的下载速度、上传速度和延迟（ping）。您可以选择连接到全球各地的服务器进行测试，以找到最适合您所在地点的服务器。Speedtest.net 还提供详细的测试结果，包括服务器信息、地理位置以及历史测试记录。它还提供移动应用程序，方便在各种设备上进行测试。',
        shortDesc: '全球最流行的网速测试，提供下载、上传速度和延迟测试。',
        url: 'https://www.speedtest.net/',
        category: 'cs',
      },
      {
        id: 'network-panel-traffic-killer',
        title: 'Network Panel - 流量杀手',
        description: 'Network Panel 是一个开源的浏览器扩展程序，它有一个名为“流量杀手”的功能，可以用于消耗网络流量或测试网络的带宽限制。通过该功能，用户可以配置生成大量网络请求，从而模拟高流量场景。这对于需要测试网络稳定性、检测网络服务提供商的流量限制，或者在特定场景下模拟高负载网络环境非常有用。',
        shortDesc: 'Network Panel 扩展的“流量杀手”功能，用于消耗流量或检测网络。',
        url: 'https://ljxi.github.io/NetworkPanel/',
        category: 'network-testing',
        tags: ['cs'],
      },

      //开源      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。',
      shortDesc: '全球最大代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      icon: '/icons/github.webp',
      }, 
      // pages    
      {
      id: 'github-pages',
      title: 'GitHub Pages',
      description: 'GitHub 提供的静态网站托管服务，支持自定义域名与 HTTPS，可直接从仓库部署，适合个人主页、项目文档与开源展示，集成 Git 工作流，极简且可靠。',
      shortDesc: 'Git 驱动的静态网站托管。',
      url: 'https://pages.github.com/',
      category: 'pages',
      icon: '/icons/github-pages.webp',
      },
      {
      id: 'cloudflare-pages',
      title: 'Cloudflare Pages',
      description: '由全球领先的 CDN 提供商 Cloudflare 推出的前端部署平台，支持 Jamstack 架构，内置构建优化、边缘函数与自动缓存更新，适合高性能 Web 应用与博客。',
      shortDesc: 'CDN 优化的前端部署平台。',
      url: 'https://pages.cloudflare.com/',
      category: 'pages',
      icon: '/icons/cloudflare-pages.webp',
      },
      {
      id: 'vercel',
      title: 'Vercel',
      description: '专为前端开发打造的现代部署平台，由 Next.js 背后团队开发，支持 Serverless 架构、实时预览与多分支部署，适合敏捷开发、商业级应用与个性化项目。',
      shortDesc: 'Next.js 团队出品的部署平台。',
      url: 'https://vercel.com/',
      category: 'pages',
      icon: '/icons/vercel.webp',
      },

];
/**
 * 搜索网站功能
 * @param {string} query - 搜索关键词
 * @returns {Array} - 符合条件的网站列表
 */
export function searchSites(query) {
  if (!query) return sites;
  const lowerQuery = query.toLowerCase();
  return sites.filter(site => {
    return (
      site.title.toLowerCase().includes(lowerQuery) ||
      site.url.toLowerCase().includes(lowerQuery) ||
      site.category.toLowerCase().includes(lowerQuery)
    );
  });
}
/**
 * 将网站数据转换为HTML标记
 * 允许直接在页面中嵌入HTML内容
 * @param {Array} sitesList - 要呈现的网站列表
 * @returns {string} - HTML标记字符串
 */
export function sitesToHtml(sitesList) {
  if (!sitesList || !sitesList.length) return '<p>没有找到符合条件的网站</p>';
  const html = sitesList.map(site => {
    // 转义HTML特殊字符以防止XSS攻击
    const safeTitle = escapeHtml(site.title);
    const safeDesc = escapeHtml(site.shortDesc || site.description);
    const safeUrl = escapeHtml(site.url);
    const safeIcon = escapeHtml(site.icon || '/images/default.svg');
    return `
      <div class="site-card" data-category="${site.category}">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <div class="site-icon">
            <img src="${safeIcon}" alt="${safeTitle}" loading="lazy" onerror="this.src='/images/default.svg'">
          </div>
          <div class="site-info">
            <h3>${safeTitle}</h3>
            <p>${safeDesc}</p>
          </div>
        </a>
      </div>
    `;
  }).join('');
  return `<div class="sites-grid">${html}</div>`;
}
/**
 * 安全转义HTML特殊字符
 * 防止XSS攻击
 * @param {string} str - 需要转义的字符串
 * @returns {string} - 安全的HTML字符串
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

