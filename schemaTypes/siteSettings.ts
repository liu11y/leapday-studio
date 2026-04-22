import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: '网站全局橱窗设置',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '本次设置的备注名 (比如：2026春季首页)',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: '首页专属大背景图',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mainTitle',
      title: '主标题 (不填则默认显示 leapday)',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: '副标题 (不填则默认显示 A PHOTOGRAPHY JOURNAL)',
      type: 'string',
    }),
  ],
})