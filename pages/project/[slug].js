import styles from './styles.module.scss'
import { Article, Content, Title } from '../../components'
import { client } from '../../lib/client'
import { format } from 'date-fns'
import Head from 'next/head'

const Project = ({ project }) => {
  const data = format(new Date(project.date), 'dd MMM yyyy')

  return (
    <Article backUrl="/" className={styles.project}>
      <Head>
        <title>{project.metaTitle}</title>
      </Head>

      <Title className={styles.projectTitle}>{project.title}</Title>
      <p className={styles.projectData}>{data}</p>
      <Content body={project.body} />
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

  return {
    props: {
      project,
    },
  }
}
