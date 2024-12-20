import Head from 'next/head'
import { useContext, useState } from 'react'
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
import { IntlProvider } from 'react-intl'
import en from './../static/en.json'
import ru from './../static/ru.json'
import { LanguageContext } from '../contexts/LanguageContext'

const LOAD_MORE_STEP = 2

export default function Home({ initialPortfolio, total }) {
  const [portfolio, setPortfolio] = useState(initialPortfolio)
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP)
  const [isLoading, setIsLoading] = useState(false)
  const { isEnglish, setIsEnglish } = useContext(LanguageContext)

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
          <Title>{isEnglish ? 'My portfolio' : 'Портфолио'}</Title>
          <PortfolioGrid>
            {portfolio.map((item) => (
              <Portfolio
                key={item?.slug?.current}
                isEnglish={isEnglish}
                {...item}
              />
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
          <Title>{isEnglish ? 'About me' : 'Обо мне'}</Title>
          <AboutMe />
        </Section>

        <Section>
          <Title color='red'>{isEnglish ? 'Contact me' : 'Напишите мне'}</Title>
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
