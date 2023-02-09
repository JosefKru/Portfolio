import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
import ScreenEgg from '../ScreenEgg'
import { contactRef } from '../Contact'

const SendMeMessage = ({ className }) => {
  return (
    <ScreenEgg type='right'>
      <div className={cl(className, styles.sendMeMessage)}>
        <a
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
          }
          className={styles.sendMeMessageButton}
        >
          Send me a message
        </a>
      </div>
    </ScreenEgg>
  )
}

export default SendMeMessage
