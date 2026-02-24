import styles from './index.module.scss'
import cl from 'classnames'
import ScreenEgg from '../ScreenEgg'
import { contactRef, nameInputRef } from '../Contact'
import { useIntl } from 'react-intl'

const SendMeMessage = ({ className }) => {
  const intl = useIntl()
  const buttonText = intl.formatMessage({ id: 'page.sendMeMessage.button' })

  const handleClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      nameInputRef.current?.focus()
    }, 700)
  }

  return (
    <ScreenEgg type='right'>
      <div className={cl(className, styles.sendMeMessage)}>
        <a onClick={handleClick} className={styles.sendMeMessageButton}>
          {buttonText}
        </a>
      </div>
    </ScreenEgg>
  )
}

export default SendMeMessage
