import { useState } from 'react'
import {
  Button,
  BuyMeCoffee,
  Cover,
  Portfolio,
  PortfolioGrid,
  Section,
  SocialNetworks,
  Title,
} from '../components'

import { loadData } from './api/data'

const LOAD_MORE_STEP = 4

export default function Home({ initialPortfolio, total }) {
  const [portfolio, setPortfolio] = useState(initialPortfolio)
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP)
  const [isLoading, setIsLoading] = useState(false)

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
      <Section>
        <Cover title="Josef<br /> Kafka" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>

      <Section>
        <Title>My Portfolio</Title>
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
              Load more...
            </Button>
          </div>
        )}
      </Section>
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
