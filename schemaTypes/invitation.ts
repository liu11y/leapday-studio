export const invitation = {
  name: 'invitation',
  title: '💍 专属电子请柬',
  type: 'document',
  fields: [
    { name: 'groom', title: '新郎名字', type: 'string' },
    { name: 'bride', title: '新娘名字', type: 'string' },
    { name: 'date', title: '日期 (例如: 2026.10.24)', type: 'string' },
    { name: 'time', title: '时间 (例如: 16:00 PM)', type: 'string' },
    { name: 'venue', title: '场地名称 (例如: 半岛酒店 Grand Ballroom)', type: 'string' },
    { name: 'address', title: '详细地址 (用于一键唤醒高德导航)', type: 'string' },
    { 
      name: 'formspreeId', 
      title: 'Formspree 表单 ID', 
      type: 'string',
      description: '填入类似 mqazzpxo 的代码，宾客回执会自动发到你的 QQ 邮箱'
    },
    { name: 'heroImage', title: '首屏背景大图 (Cloudflare 直链)', type: 'url' },
    { name: 'music', title: '背景音乐 (MP3外链)', type: 'url' },
    {
      name: 'galleryUrls',
      title: '相册图片批量导入 (一行一个链接)',
      type: 'text',
      rows: 5,
    }
  ]
}