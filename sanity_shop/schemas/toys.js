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
      type: 'object',
      fields: [
        {
          title: 'English',
          name: 'en',
          type: 'string',
        },
        {
          title: 'Russian',
          name: 'ru',
          type: 'string',
        },
      ],
      group: 'content',
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
      title: 'Image / Video',
      type: 'array',
      of: [
        { type: 'image' },
        {
          type: 'file',
          title: 'Video',
          options: { accept: 'video/*' },
        },
      ],
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'object',
      fields: [
        {
          title: 'English',
          name: 'en',
          type: 'string',
        },
        {
          title: 'Russian',
          name: 'ru',
          type: 'string',
        },
      ],
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Body content',
      name: 'body',
      type: 'object',
      fields: [
        {
          title: 'English',
          name: 'en',
          type: 'array',
          of: [{ type: 'block' }, { type: 'image' }, { type: 'file', title: 'Video', options: { accept: 'video/*' } }],
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Russian',
          name: 'ru',
          type: 'array',
          of: [{ type: 'block' }, { type: 'image' }, { type: 'file', title: 'Video', options: { accept: 'video/*' } }],
          validation: (Rule) => Rule.required(),
        },
      ],
      group: 'content',
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
