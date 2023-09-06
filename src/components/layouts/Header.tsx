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
          <Link href='/'>Joseph&apos;s Web</Link>
        </h1>
        <ul className='gap-8 items-center hidden sm:flex'>
          {links.map((link, i) => (
            <Link key={i} href={link.path}>
              <li className='text-sm'>{link.name}</li>
            </Link>
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
          <FaBars size={18} />
        </button>
      </div>
      <div
        className={`${
          mobileNavigation ? "translate-y-0" : "-translate-y-48"
        } bg-white py-4 shadow-md sm:hidden transition-all`}
      >
        <ul className='flex flex-col text-base gap-2 px-6'>
          {links.map((link, i) => (
            <Link key={i} href={link.path} onClick={toogleMobileNavigation}>
              <li className='flex justify-between mb-2'>
                {link.name}
                <span>&gt;</span>
              </li>
              <hr />
            </Link>
          ))}
          <li>
            <Link href='/feedback' onClick={toogleMobileNavigation}>Feedback</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
