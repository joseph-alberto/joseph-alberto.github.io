import React, { FC } from "react"
import PortfolioCard from "./PortfolioCard"
import { Portfolio } from "@/src/interfaces/Portfolio"

type Props = {
  data: Portfolio[]
}

const PortfolioContainer = ({data}: Props) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8`}>
    {data.map((portfolio, i) => (
      <PortfolioCard key={i} portfolio={portfolio} />
    ))}
    </div>
  )
}

export default PortfolioContainer
