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
    <Container className='py-20 sm:py-24 px-4 md:px-24 xl:px-4'>
      <h1
        className='text-2xl xs:text-3xl md:text-4xl font-bold text-cyan-400 inline-block mb-4'
        style={{
          filter: "drop-shadow(-2px 3px 2px rgba(45, 212, 191, 0.5))",
        }}
      >
        Portfolio
      </h1>
      <p className='text-sm'>
      Step into my portfolio, a curated showcase of my work that spans personal passion projects and meaningful collaborations with esteemed organizations. I{`'`}m thrilled to share these achievements with you, and I hope you find inspiration within these pages.
      </p>
      <div className='mt-6'>
        <PortfolioContainer data={portfolios} />
      </div>
    </Container>
  )
}

export default Page
