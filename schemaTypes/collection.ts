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
      // --- 关键改动：改为 URL 类型，直接粘贴 Cloudflare 链接 ---
      name: 'heroImageUrl',
      title: '首页背景图 (Cloudflare 直链)',
      type: 'url',
      description: '请粘贴 PicGo 上传后得到的 https://...pages.dev 链接'
    },
    {
      name: 'heroVideo',
      title: '首页视频背景 (可选)',
      type: 'file',
      options: {
        accept: 'video/mp4,video/webm'
      },
      description: '上传 MP4 格式。注意：如果填了上面的图片直链，视频将作为备选或在图片加载前显示。'
    }
  ],
}
