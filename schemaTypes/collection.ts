import {defineField, defineType} from 'sanity'

export const collection = defineType({
  name: 'collection',
  title: '摄影合集 (Collection)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '合集标题',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: '拍摄/发布日期',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' }
    }),
    defineField({
      name: 'shortIntro',
      title: '简短导语 (比如：在海拔4000米的荒野...)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: '封面大图 (会自动提取这图的颜色做高级渐变)',
      type: 'image',
      options: { hotspot: true }, // 允许你在后台自由调整裁切重点
    }),
    defineField({
      name: 'tags',
      title: '标签 (输入后按回车，比如: 风光, 川西, 胶片)',
      type: 'array',
      of: [{type: 'string'}],
      options: { layout: 'tags' }
    }),
    defineField({
      name: 'images',
      title: '照片墙 (把这个合集的照片全拖进来)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' } // 以漂亮的网格形式显示缩略图
    }),
  ],
})