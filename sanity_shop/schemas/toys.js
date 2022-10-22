export default {
  name: 'toys',
  type: 'document',
  title: 'Toys',
  groups: [{ name: 'content' }, { name: 'meta' }, {}],
  fields: [
    {
      title: 'Meta-title',
      name: 'metaTitle',
      type: 'string',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Published Date',
      name: 'date',
      type: 'date',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],

      // понять как здесь можно добавить caption для alt
      // fields: [
      //   {
      //     name: 'caption',
      //     type: 'string',
      //     title: 'Caption',
      //     options: {
      //       isHighlighted: true,
      //     },
      //   },
      //   {
      //     name: 'attribution',
      //     type: 'string',
      //     name: 'Attribution',
      //   },
      // ],
    },
    {
      title: 'Description',
      name: 'body',
      group: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'content',

      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
