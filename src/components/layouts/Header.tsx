"use client"
import { useState } from "react"
import Link from "next/link"
import { FaBars } from "react-icons/fa6"
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
  const [mobileNavigation, setmobileNavigation] = useState(false)
  const toogleMobileNavigation = () => {
    setmobileNavigation(!mobileNavigation)
  }
  return (
    <nav className='flex flex-col fixed w-full z-20'>
      <div className='flex justify-between py-3 px-4 z-20 md:px-24 items-center bg-white border rounded-b-md'>
        <h1 className='font-semibold'>
          <Link href='/'>{`Joseph Web's`}</Link>
        </h1>
        <ul className='gap-8 items-center hidden sm:flex'>
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
        <button
          className='shadow-sm block sm:hidden'
          onClick={toogleMobileNavigation}
        >
          <FaBars size={16} />
        </button>
      </div>
      <div
        className={`${ mobileNavigation ? "-translate-y-48" : "translate-y-0" } bg-white py-4 shadow-md sm:hidden transition-all`}
      >
        <ul className='flex flex-col text-base gap-2 px-6'>
          {links.map((link, i) => (
            <>
              <li key={i} className='flex justify-between'>
                <Link href={link.path}>{link.name}</Link>
                <span>&gt;</span>
              </li>
              <hr />
            </>
          ))}
          <li>
            <Link href='/feedback'>Feedback</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
