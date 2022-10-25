import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
import Link from 'next/link'
import Title from '../Title'
import Image from 'next/image'
import { urlFor } from '../../lib/client'

const Portfolio = ({
  className,
  date,
  title,
  imagesGallery,
  description,
  slug,
}) => {
  return (
    <Link
      href={`/project/${encodeURIComponent(slug.current)}`}
      className={cl(className, styles.project)}
    >
      <a className={styles.projectLink}>
        <Title type="small" className={styles.projectTitle}>
          {title}
        </Title>
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <Image
              src={urlFor(imagesGallery).url()}
              alt={imagesGallery.caption}
              width="100"
              height="100"
            />
          </div>
          <p className={styles.projectDescription}>{description}</p>
        </div>
      </a>
    </Link>
  )
}

export default Portfolio
