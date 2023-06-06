import Head from 'next/head'
import { useState } from 'react'
import {
  Button,
  SendMeMessage,
  Cover,
  Portfolio,
  PortfolioGrid,
  Section,
  SocialNetworks,
  Title,
  AboutMe,
  Contact,
} from '../components'
import { loadData } from './api/data'
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher'
import { IntlProvider } from 'react-intl'
import en from './../static/en.json'
import ru from './../static/ru.json'

const LOAD_MORE_STEP = 2

export default function Home({ initialPortfolio, total }) {
  const [portfolio, setPortfolio] = useState(initialPortfolio)
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP)
  const [isLoading, setIsLoading] = useState(false)
  const [isEnglish, setIsEnglish] = useState(true)

  const showLoadButton = total > loadedAmount

  const getMoreProjects = async () => {
    setIsLoading(true)
    try {
      const data = await fetch(
        `/api/data?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
      ).then((response) => response.json())
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP)
      setPortfolio([...portfolio, ...data.portfolioList])
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <div>
      <IntlProvider locale='en' messages={isEnglish ? en : ru}>
        <Head>
          <title>{isEnglish ? 'Alyakin Ivan' : 'Алякин Иван'}</title>
        </Head>

        <Section>
          <Cover
            title={isEnglish ? 'Ivan<br /> Alyakin' : 'Иван<br /> Алякин'}
            isEnglish={isEnglish}
            setIsEnglish={setIsEnglish}
          />
          <SocialNetworks />
          <SendMeMessage />
        </Section>

        <Section>
          <Title>{isEnglish ? 'My Portfolio' : 'Портфолио'}</Title>
          <PortfolioGrid>
            {portfolio.map((item) => (
              <Portfolio key={item.slug.current} {...item} />
            ))}
          </PortfolioGrid>
          {showLoadButton && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button onClick={getMoreProjects} disabled={isLoading}>
                {isEnglish ? 'Load more...' : 'Загрузить больше...'}
              </Button>
            </div>
          )}
        </Section>

        <Section>
          <Title>{isEnglish ? 'About Me' : 'Обо Мне'}</Title>
          <AboutMe />
        </Section>

        <Section>
          <Title color='red'>{isEnglish ? 'Contact Me' : 'Прямая связь'}</Title>
          <Contact isEnglish={isEnglish} />
        </Section>
      </IntlProvider>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { portfolioList, total } = await loadData(0, LOAD_MORE_STEP)

  return {
    props: {
      initialPortfolio: portfolioList,
      total,
    },
  }
}
