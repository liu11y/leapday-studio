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
      options: {
        hotspot: true,
      },
      description: '适合临时上传或需要自动生成模糊占位图时使用。'
    },
    {
      name: 'heroImageUrl',
      title: '首页背景图 (Cloudflare 外部直链)',
      type: 'url',
      description: '请粘贴 PicGo 上传后得到的 https://...pages.dev 链接，适合追求国内极速访问时使用。'
    },
    {
      name: 'heroVideo',
      title: '首页视频背景 (可选)',
      type: 'file',
      options: {
        accept: 'video/mp4,video/webm'
      },
      description: '上传 MP4 格式。注意：前端逻辑会优先寻找视频，若无视频则按照“外部直链 > 直接上传”的顺序显示图片。'
    }
  ],
}
