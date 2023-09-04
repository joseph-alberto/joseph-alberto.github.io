import React from "react"
import Link from "next/link"

type Props = {}

type LinksType = {
  name: string | JSX.Element
  path: string
}[]

const links: LinksType = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
]

const Header = ({}: Props) => {
  return (
    <nav className=''>
      <div className='flex justify-between mx-auto bg-white border py-3 px-24 rounded-b-md items-center'>
        <h1 className='font-semibold'>
          <Link href='/'>{`Joseph Web's`}</Link>
        </h1>
        <ul className='flex gap-8 items-center'>
          {links.map((link, i) => (
            <li className='text-sm' key={i}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
          <li className='text-sm'>
            <Link href='/feedback'>
              <button className='border hover:bg-gray-100 py-2 px-4 rounded-md hover:shadow transition-colors'>
                Feedback
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
