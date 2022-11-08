import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
import ScreenEgg from '../ScreenEgg'

const SendMeMessage = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(className, styles.sendMeMessage)}>
        <a href="#" className={styles.sendMeMessageButton}>
          Send me a message
        </a>
      </div>
    </ScreenEgg>
  )
}

export default SendMeMessage
