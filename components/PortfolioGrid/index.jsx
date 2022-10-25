import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'

const Portfolio = ({ className, children }) => {
  return <div className={cl(className, styles.portfolioGrid)}>{children}</div>
}

export default Portfolio
