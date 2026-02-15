import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'
import 'animate.css'
import styles from '../styles/404.module.scss'
import Button from '../components/Button'
import { LanguageContext } from '../contexts/LanguageContext'

import en from '../static/en.json'
import ru from '../static/ru.json'

function Page404() {
  const router = useRouter()
  const { isEnglish, isInitialized } = useContext(LanguageContext)
  const messages = isEnglish ? en : ru

  const handleGoHome = () => {
    router.push('/')
  }

  if (!isInitialized) {
    return null
  }

  return (
    <IntlProvider locale={isEnglish ? 'en' : 'ru'} messages={messages}>
      <div className={styles.container}>
        <Head>
          <title>404 - {isEnglish ? 'Page Not Found' : 'Страница не найдена'}</title>
        </Head>

        <div className={styles.content}>
          <div className={styles.errorCode}>
            <FormattedMessage id="page.404.title" />
          </div>

          <h1 className={styles.title}>
            <FormattedMessage id="page.404.subtitle" />
          </h1>

          <p className={styles.description}>
            <FormattedMessage id="page.404.description" />
          </p>

          <Button onClick={handleGoHome} className={styles.button}>
            <FormattedMessage id="page.404.button" />
          </Button>
        </div>

        <div className={styles.illustration}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </IntlProvider>
  )
}

export default Page404
