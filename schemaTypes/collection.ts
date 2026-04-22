export const collection = {
  name: 'collection',
  title: '摄影作品集',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '作品标题',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: '拍摄日期 (例如: 2025.04)',
      type: 'string',
    },
    {
      name: 'shortIntro',
      title: '简短介绍',
      type: 'text',
      rows: 2,
    },
    {
      name: 'tags',
      title: '标签',
      type: 'array',
      of: [{type: 'string'}],
      options: { layout: 'tags' }
    },
    {
      name: 'coverImage',
      title: '封面图 (Sanity 直接上传)',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'coverImageUrl',
      title: '封面图 (Cloudflare / GitHub 外部直链)',
      type: 'url',
      description: '优先显示此项。'
    },
    // 👇 这就是那个能让你极速批量粘贴链接的字段！
    {
      name: 'bulkExternalUrls',
      title: '批量导入外链 (极速版)',
      type: 'text',
      rows: 5,
      description: '【批量专用】请直接把批量生成的多个链接粘贴在这里（每行一个）。前端会自动解析，并与下方单张上传的图片合并显示。'
    },
    {
      name: 'images',
      title: '作品图集 (支持单张上传或填入单张链接)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'imageItem',
          title: '图片项目',
          fields: [
            {
              name: 'imageAsset',
              title: '方式一：直接上传图片',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'externalUrl',
              title: '方式二：填入外部直链',
              type: 'url'
            }
          ],
          preview: {
            select: { title: 'externalUrl', media: 'imageAsset' },
            prepare({ title, media }: any) {
              return { title: title || '已上传原生图片', media };
            }
          }
        }
      ]
    }
  ]
}
