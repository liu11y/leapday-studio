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
      title: '首页静态背景图',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: '当没有上传视频，或视频加载中时，将显示此图片。'
    },
    {
      name: 'heroVideo',
      title: '首页视频背景 (可选)',
      type: 'file',
      options: {
        accept: 'video/mp4,video/webm'
      },
      description: '上传 MP4 或 WebM 格式。上传后，网页端将优先播放视频，并自动静音循环。'
    }
  ],
}
