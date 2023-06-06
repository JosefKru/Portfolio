import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import styles from './index.module.scss'
import cl from 'classnames'

const Cover = ({ className, title, isEnglish, setIsEnglish }) => {
  return (
    <div className={cl(className, styles.cover)}>
      <div className={cl(className, styles.language)}>
        <LanguageSwitcher setIsEnglish={setIsEnglish} isEnglish={isEnglish} />
      </div>
      <h1
        className={styles.coverTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
    </div>
  )
}

export default Cover
