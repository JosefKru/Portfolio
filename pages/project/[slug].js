import Head from 'next/head'
import styles from './styles.module.scss'
import ReactImageGallery from 'react-image-gallery'
import { Article, Content, Title } from '../../components'
import { client } from '../../lib/client'
import { format } from 'date-fns'
import { urlFor } from './../../lib/client'

const Project = ({ project, gallery }) => {
  const data = format(new Date(project.date), 'dd MMM yyyy')
  const galleryOfItem = gallery.filter((item) => item._id === project._id)

  const items = galleryOfItem[0].imagesGallery.map((_, index) => {
    return {
      original: galleryOfItem[0].imagesGallery[index].asset.url,
      thumbnail: urlFor(galleryOfItem[0].imagesGallery[index].asset.url).url(),
      originalHeight: 'auto',
      thumbnailHeight: 'auto',
    }
  })

  return (
    <Article backUrl='/'>
      <Head>
        <title>{project.metaTitle}</title>
        <base target='_blank' />
      </Head>

      <div className={styles.project}>
        <Title className={styles.projectTitle}>{project.title}</Title>
        <p className={styles.projectData}>{data}</p>

        <div className={styles.projectImage}>
          <ReactImageGallery
            showThumbnails={true}
            thumbnailPosition='bottom'
            slideInterval={5000}
            slideDuration={800}
            showNav={true}
            autoPlay={true}
            items={items}
            showFullscreenButton={true}
            showPlayButton={false}
            showBullets={true}
          />
        </div>
        <Content body={project.body} />
      </div>
    </Article>
  )
}

export default Project

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
        slug {
            current
        }
    }`

  const projects = await client.fetch(query)

  const paths = projects.map((project) => ({
    params: {
      slug: project.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params: { slug } }) {
  const query_project = `*[_type == "toys" && slug.current == '${slug}'][0]`
  const query_gallery = `*[_type == "toys"] {
    _id,
    imagesGallery[] {
     asset->{url}
    }
  }`

  const project = await client.fetch(query_project)
  const gallery = await client.fetch(query_gallery)

  return {
    props: {
      project,
      gallery,
    },
  }
}
