import cl from 'classnames'
import Link from 'next/link'
import React from 'react'
import styles from './index.module.scss'
import { FiArrowLeft } from 'react-icons/fi'

const Article = ({ className, children, backUrl }) => {
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl}>
        <a className={styles.articleBack}>
          <FiArrowLeft />
        </a>
      </Link>
      <div className={styles.articleContent}>{children}</div>
    </article>
  )
}

export default Article
