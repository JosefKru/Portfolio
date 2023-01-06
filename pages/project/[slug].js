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

  const items = gallery[1].imagesGallery.map((_, index) => {
    return {
      original: galleryOfItem[0].imagesGallery[index].asset.url,
      thumbnail: urlFor(galleryOfItem[0].imagesGallery[index].asset.url).url(),
      originalHeight: '500px',
      thumbnailHeight: '60px',
    }
  })

  return (
    <Article backUrl='/' className={styles.project}>
      <Head>
        <title>{project.metaTitle}</title>
      </Head>

      <Title className={styles.projectTitle}>{project.title}</Title>
      <p className={styles.projectData}>{data}</p>
      <Content body={project.body} />

      <div className={styles.projectImage}>
        <ReactImageGallery
          showThumbnails={true}
          thumbnailPosition='bottom'
          slideInterval={5000}
          slideDuration={800}
          showNav={true}
          autoPlay={false}
          items={items}
          showFullscreenButton={true}
          showPlayButton={false}
          showBullets={true}
        />
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
  const query = `*[_type == "toys" && slug.current == '${slug}'][0]`

  const project = await client.fetch(query)
  const gallery = await client.fetch(`*[_type == "toys"] {
    _id,
    imagesGallery[] {
     asset->{url}
    }
  }`)

  return {
    props: {
      project,
      gallery,
    },
  }
}
