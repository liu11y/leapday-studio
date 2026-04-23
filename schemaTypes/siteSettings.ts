export const siteSettings = {
  name: 'siteSettings',
  title: '网站全局前端设置',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: '主标题 (例如: NEO DREAM)',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: '副标题 (例如: A PHOTOGRAPHY JOURNAL)',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: '首页背景图 (Sanity 直接上传)',
      type: 'image',
      options: { hotspot: true },
      description: '适合临时上传或需要自动生成模糊占位图时使用。'
    },
    {
      name: 'heroImageUrl',
      title: '首页背景图 (Cloudflare 外部直链)',
      type: 'url',
      description: '优先显示此项。请粘贴 PicGo 得到的 https://...pages.dev 链接。'
    },
    {
      name: 'heroVideoUrl',
      title: '首页视频背景 (Cloudflare / GitHub 外部直链)',
      type: 'url',
      description: '【极速视频】优先播放此项。请将 GitHub 上的 MP4 链接粘贴在此处（文件需小于 25MB）。'
    },
    {
      name: 'heroVideo',
      title: '首页视频背景 (可选)',
      type: 'file',
      options: { accept: 'video/mp4,video/webm' },
      description: '上传 MP4 格式。注意：视频优先级最高，若无视频则显示下方图片。'
    }
  ],
}
