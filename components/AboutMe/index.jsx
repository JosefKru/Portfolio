import React from 'react'
import styles from './index.module.scss'
import cn from 'classnames'
import { useIntl, FormattedMessage } from 'react-intl'

const AboutMe = ({ className }) => {
  const intl = useIntl()

  const greeting = intl.formatMessage({ id: 'page.about.greeting' })
  const adaptable = intl.formatMessage({ id: 'page.about.adaptable' })
  const freetime = intl.formatMessage({ id: 'page.about.freetime' })
  const goal = intl.formatMessage({ id: 'page.about.goal' })

  return (
    <div className={cn(className, styles.aboutMe)}>
      <div className={styles.aboutMeDescription}>
        <p>{greeting}</p>
        <p>
          <FormattedMessage
            id='page.about.technical'
            values={{ span: (...chunks) => <span>{chunks}</span> }}
          />
        </p>
        <p>{adaptable}</p>
        <p>{freetime}</p>
        <p>{goal}</p>
      </div>

      <div className={styles.aboutMeAvatar}></div>
    </div>
  )
}

export default AboutMe
