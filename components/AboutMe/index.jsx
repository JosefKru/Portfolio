import styles from './index.module.scss'
import cn from 'classnames'
import { FormattedMessage } from 'react-intl'

const AboutMe = ({ className }) => {
  return (
    <div className={cn(className, styles.aboutMe)}>
      <div className={styles.aboutMeDescription}>
        <p>
          <FormattedMessage
            id='page.about.greeting'
            values={{ span: (...chunks) => <span>{chunks}</span> }}
          />
        </p>
        <p>
          <FormattedMessage
            id='page.about.technical'
            values={{ span: (...chunks) => <span>{chunks}</span> }}
          />
        </p>
        <p>
          <FormattedMessage
            id='page.about.freetime'
            values={{ span: (...chunks) => <span>{chunks}</span> }}
          />
        </p>
        <p>
          <FormattedMessage
            id='page.about.goal'
            values={{ span: (...chunks) => <span>{chunks}</span> }}
          />
        </p>
      </div>

      <div className={styles.aboutMeAvatar}></div>
    </div>
  )
}

export default AboutMe
