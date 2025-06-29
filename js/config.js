// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    // xiaomaomi: {
    //     api: 'https://zy.xiaomaomi.cc/api.php/provide/vod',
    //     name: '小猫咪资源',
    // },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    ckzy: {
        api: 'https://www.ckzy1.com',
        name: 'CK资源',
        adult: true
     },
     jkun: {
         api: 'https://jkunzyapi.com',
         name: 'jkun资源',
         adult: true
     },
     bwzy: {
         api: 'https://api.bwzym3u8.com',
         name: '百万资源',
         adult: true
     },
     souav: {
         api: 'https://api.souavzy.vip',
         name: 'souav资源',
         adult: true
     },
     r155: {
         api: 'https://155api.com',
         name: '155资源',
         adult: true
     },
     lsb: {
         api: 'https://apilsbzy1.com',
         name: 'lsb资源',
         adult: true
     },
     huangcang: {
         api: 'https://hsckzy.vip',
         name: '黄色仓库',
         adult: true,
         detail: 'https://hsckzy.vip'
     },
     yutu: {
         api: 'https://yutuzy10.com',
         name: '玉兔资源',
         adult: true
     },

// 请将以下内容添加到您的 config.js 文件中的 API_SITES 对象内部
// 确保在这些新条目之前有一个逗号，如果它们不是 API_SITES 中的第一个条目。
// 并且在这些新条目中的最后一个条目之后没有多余的逗号。

    // 🚀麻豆
    madou: { // 键名调整为英文小写
        api: 'http://wuxu.cc/api.php/provide/vod/from/mdm3u8/',
        name: '🚀麻豆',
        adult: true
    },
    // 🚀写真
    xiezhen: { // 键名调整为拼音
        api: 'https://kkzy.me/api.php/provide/vod/',
        name: '🚀写真',
        adult: true
    },
    // 🚀精东
    jingdong: { // 键名调整为拼音
        api: 'http://chujia.cc/api.php/provide/vod/from/m3u8/',
        name: '🚀精东',
        adult: true
    },
    // 🚀易看
    yikan: { // 键名调整为拼音
        api: 'https://api.yikanapi.com/api.php/provide/vod/at/json',
        name: '🚀易看',
        adult: true
    },
    // 🚀奥卡
    aoka: { // 键名调整为拼音
        api: 'https://aosikazy.com/api.php/provide/vod/',
        name: '🚀奥卡',
        adult: true
    },
    // 🚀葡萄
    putao: { // 键名调整为拼音
        api: 'https://caiji.putaozyw.net/inc/apijson_vod.php',
        name: '🚀葡萄',
        adult: true
    },
    // 🚀雪豹
    xuebao: { // 键名调整为拼音
        api: 'https://api.xbapi.cc/api.php/provide/vod/',
        name: '🚀雪豹',
        adult: true
    },
    // 🚀奶香
    naixiang: { // 键名调整为拼音
        api: 'https://naixxzy.com/api.php/provide/vod/at/json',
        name: '🚀奶香',
        adult: true
    },
    // 🚀丝袜
    siwa: { // 键名调整为拼音
        api: 'https://www.siwazyw.tv/api.php/provide/vod/',
        name: '🚀丝袜',
        adult: true
    },
    // 🚀天天
    tiantian: { // 键名调整为拼音
        api: 'https://apittzy.com/api.php/provide/vod/at/json',
        name: '🚀天天',
        adult: true
    },
    // 🚀深林
    shenlin: { // 键名调整为拼音
        api: 'https://slapibf.com/api.php/provide/vod/at/json',
        name: '🚀深林',
        adult: true
    },
    // 🚀玉兔
    yutu_new: { // 键名调整为拼音，避免与旧有玉兔冲突
        api: 'https://apiyutu.com/api.php/provide/vod/at/json',
        name: '🚀玉兔',
        adult: true
    },
    // 🚀8天
    batian: { // 键名调整为拼音
        api: 'https://8day.icu/api.php/provide/vod/at/json',
        name: '🚀8天',
        adult: true
    },
    // 🚀湿园
    shiyuan: { // 键名调整为拼音
        api: 'https://xxavs.com/api.php/provide/vod/at/json',
        name: '🚀湿园',
        adult: true
    },
    // 🚀优异
    youyi: { // 键名调整为拼音
        api: 'https://a.uezy.pw/api.php/provide/vod/at/json',
        name: '🚀优异',
        adult: true
    },
    // 🚀色逼 (与优异 API 相同，请注意是否重复)
    sebi: { // 键名调整为拼音
        api: 'https://a.uezy.pw/api.php/provide/vod/at/json',
        name: '🚀色逼',
        adult: true
    },
    // 🚀橘猫
    jiumao: { // 键名调整为拼音
        api: 'https://to.to-long.com/api.php/provide/vod/at/json',
        name: '🚀橘猫',
        adult: true
    },
    // 🚀玉兔专场 (有 categories) - 注意：LibreTV config.js 不直接支持 categories
    yutu_zhuanchang: { // 键名调整
        api: 'https://apiyutu.com/api.php/provide/vod/',
        name: '🚀玉兔',
        adult: true
    },
    // 🚀森林1 (有 categories) - 注意：LibreTV config.js 不直接支持 categories
    senlin1: { // 键名调整
        api: 'https://slapibf.com/api.php/provide/vod/',
        name: '🚀森林1',
        adult: true
    },
    // 🚀森林
    senlin: { // 键名调整
        api: 'https://beiyong.slapibf.com/api.php/provide/vod/?ac=list',
        name: '🚀森林',
        adult: true
    },
    // ️🚀乐播 (有 categories) - 注意：LibreTV config.js 不直接支持 categories
    lebo: { // 键名调整
        api: 'https://lbapi9.com/api.php/provide/vod/',
        name: '️🚀乐播',
        adult: true
    },
    // 🚀色猫 (有 categories) - 注意：LibreTV config.js 不直接支持 categories
    semao: { // 键名调整
        api: 'https://caiji.semaozy.net/inc/apijson_vod.php/',
        name: '🚀色猫',
        adult: true
    },
    // 🚀番外 (有 categories) - 注意：LibreTV config.js 不直接支持 categories
    fanwai: { // 键名调整
        api: 'http://fhapi9.com/api.php/provide/vod/',
        name: '🚀番外',
        adult: true
    },
    // 🚀155 (有 categories) - 注意：LibreTV config.js 不直接支持 categories
    r155_special: { // 键名调整，避免与 r155 冲突
        api: 'https://155api.com/api.php/provide/vod/',
        name: '🚀155',
        adult: true
    },
    // 🚀滴滴
    didi: { // 键名调整
        api: 'https://api.ddapi.cc/api.php/provide/vod/',
        name: '🚀滴滴',
        adult: true
    },
    // 🔞易看 (与易看 API 相似，请注意是否重复)
    yikan_adult: { // 键名调整，避免与 yikan 冲突
        api: 'https://api.yikanapi.com/api.php/provide/vod/from/yikan',
        name: '🔞易看',
        adult: true
    },
    // 🔷小丝袜
    xiaosiwa: { // 键名调整
        api: 'https://www.siwazyw.tv/api.php/provide/vod/at/json',
        name: '🔷小丝袜',
        adult: true
    },
    // 🔷小草1
    xiaocao1: { // 键名调整
        api: 'https://www.caoliuzyw.com/api.php/provide/vod/at/json/',
        name: '🔷小草1',
        adult: true
    },
    // 🚀猫源
    maoyuan: { // 键名调整
        api: 'https://api.maozyapi.com/inc/apijson_vod.php',
        name: '🚀猫源',
        adult: true
    },
    // 🚀富二代
    fuerdai: { // 键名调整
        api: 'http://f2dcj6.com/sapi/?ac=videolist',
        name: '🚀富二代',
        adult: true
    },
    // 🚀探探 (searchable/quickSearch 为 0，可能不支持搜索)
    tantan: { // 键名调整
        api: 'https://apittzy.com/api.php/provide/vod/',
        name: '🚀探探',
        adult: true
    }，
    // av资源
    avziy: { // 键名调整为拼音
        api: 'https://api.souavzy.vip/api.php/provide/vod/at/json',
        name: 'av资源',
        adult: true // 根据内容判断是否成人内容
    },
    // 大奶子资源
    danaizy: { // 键名调整为拼音
        api: 'https://apidanaizi.com/api.php/provide/vod',
        name: '大奶子资源',
        adult: true
    },
    // 美少女
    msv: { // 键名保持原样
        api: 'https://www.msnii.com/api/xml.php',
        name: '美少女',
        adult: true
    },
    // 饮水机
    ysj: { // 键名保持原样
        api: 'https://www.xrbsp.com/api/xml.php',
        name: '饮水机',
        adult: true
    },
    // 香奶儿
    xne: { // 键名保持原样
        api: 'https://www.gdlsp.com/api/xml.php',
        name: '香奶儿',
        adult: true
    },
    // 白嫖
    bp: { // 键名保持原样
        api: 'https://www.kxgav.com/api/xml.php',
        name: '白嫖',
        adult: true
    },
    // 草榴
    caoliuzyw: { // 键名保持原样
        api: 'https://www.caoliuzyw.com/api.php/provide/vod/at/json/',
        name: '草榴',
        adult: true
    },
    // 爱坤
    ikunzyapi: { // 键名保持原样
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: '爱坤',
        adult: true
    },
    // 飞速
    feisuzyapi: { // 键名保持原样
        api: 'https://www.feisuzyapi.com/api.php/provide/vod/?ac=list',
        name: '飞速',
        adult: true
    },
    // 黄艾薇
    hav: { // 键名保持原样
        api: 'https://www.pgxdy.com/api/xml.php',
        name: '黄艾薇',
        adult: true
    },
    // 辣椒
    apilj: { // 键名保持原样
        api: 'https://apilj.com/api.php/provide/vod/at/xml/',
        name: '辣椒',
        adult: true
    },
    // 甜蜜资源
    timizy: { // 键名保持原样
        api: 'https://timizy10.cc/api.php/provide/vod/?ac=list',
        name: '甜蜜资源',
        adult: true
    },
    // 量子
    liangzi: { // 键名调整为拼音
        api: 'https://cj.lziapi.com/api.php/provide/vod/at/xml/',
        name: '量子',
        adult: true // 包含伦理片，视为成人内容
    },
    // 非凡
    feifan: { // 键名调整为拼音
        api: 'http://cj.ffzyapi.com/api.php/provide/vod/at/xml/',
        name: '非凡',
        adult: true // 包含伦理片，视为成人内容
    }

    // 下面是资源失效率高的API源，不建议使用
    // subo: {
    //     api: 'https://subocaiji.com/api.php/provide/vod',
    //     name: '速播资源'
    // },
    // fczy: {
    //     api: 'https://api.fczy888.me/api.php/provide/vod',
    //     name: '蜂巢资源'
    // },
    // ukzy: {
    //     api: 'https://api.ukuapi88.com/api.php/provide/vod',
    //     name: 'U酷资源'
    // },
};

// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
