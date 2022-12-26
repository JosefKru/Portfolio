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
      title: 'Published Date',
      name: 'date',
      type: 'date',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imagesGallery',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      group: 'content',
      title: 'Body content',
      name: 'body',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
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
