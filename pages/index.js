import { useState } from 'react'
import {
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
  console.log(portfolio)

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
