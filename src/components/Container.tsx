import React from "react"

type Props = {
  children: JSX.Element[] | JSX.Element | string
  className?: string
}

const Container = ({ children, className }: Props) => {
  return <main className={`container mx-auto ${className}`}>{children}</main>
}

export default Container
