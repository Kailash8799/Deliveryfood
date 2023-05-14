import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation:rule=>rule.required(),
    }),
    defineField({
      name: 'short_desc',
      title: 'Short Description',
      type: 'string',
      validation:rule=>rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price of the dish in INR ',
      type: 'number',
      validation:rule=>rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
