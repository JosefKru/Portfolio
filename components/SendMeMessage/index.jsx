import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
import ScreenEgg from '../ScreenEgg'
import { contactRef } from '../Contact'
import { useIntl } from 'react-intl'

const SendMeMessage = ({ className }) => {
  const intl = useIntl()
  const buttonText = intl.formatMessage({ id: 'page.sendMeMessage.button' })

  return (
    <ScreenEgg type='right'>
      <div className={cl(className, styles.sendMeMessage)}>
        <a
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
          }
          className={styles.sendMeMessageButton}
        >
          {buttonText}
        </a>
      </div>
    </ScreenEgg>
  )
}

export default SendMeMessage
