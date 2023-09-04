"use client"
import Container from "@/src/components/Container"
import PortfolioContainer from "@/src/components/pages/portfolio/PortfolioContainer"
import React from "react"
import data from "@/src/data/portfolio.json"
import { Portfolio } from "@/src/interfaces/Portfolio"

type Props = {}

const Page = (props: Props) => {
  const portfolios: Portfolio[] = data
  return (
    <Container className='py-6'>
      <h1
        className='text-4xl font-bold text-cyan-400 inline-block mb-6'
        style={{
          filter: "drop-shadow(-2px 3px 2px rgba(45, 212, 191, 0.5))",
        }}
      >
        Portfolio
      </h1>
      <p className='text-sm'>
        Over here you can see some of the work I&apos;ve created so far, but
        several projects are made for company that I worked on so I can&apos;t
        publish the source code here, please take a look *thumb*.
      </p>
      <div className='mt-8'>
        <PortfolioContainer data={portfolios} />
      </div>
    </Container>
  )
}

export default Page