import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'

const Button = ({ className, children, disabled, onClick }) => {
  return (
    <button
      className={cl(className, styles.button)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
