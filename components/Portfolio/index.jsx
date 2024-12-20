import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
import Link from 'next/link'
import Title from '../Title'
import { urlFor } from '../../lib/client'
import Image from 'next/image'

const Portfolio = ({
  className,
  title,
  imagesGallery,
  description,
  slug,
  isEnglish,
}) => {
  return (
    <Link
      href={`/project/${encodeURIComponent(slug?.current)}`}
      className={cl(className, styles.project)}
    >
      <a className={styles.projectLink}>
        <Title type='small' className={styles.projectTitle}>
          {isEnglish ? title.en : title.ru}
        </Title>
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <Image
              src={urlFor(imagesGallery[0]).url()}
              layout='fill'
              objectFit='contain'
              alt=''
            />
          </div>
          <p className={styles.projectDescription}>
            {isEnglish ? description.en : description.ru}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default Portfolio
