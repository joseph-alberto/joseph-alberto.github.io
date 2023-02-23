import { useState } from "react"
import { useScroll } from "../../hooks/Scroll"

const Navbar = () => {

    const {scroll} = useScroll()

    const sectionScroll = (section) => {
        console.log(window.innerHeight, section)
        console.log(window.innerHeight * section)
        scroll(window.innerHeight * section)
    }

    return (
        <div className='fixed top-0 w-full p-2'>
            <div className='container flex'>
                {/* Brand */}
                <div className='w-12 sm:w-36 py-3'>
                    My Website
                </div>
                <nav className='grow p-3'>
                    <ul className='flex flex-auto gap-10 justify-end'>
                        <li className='hover:text-indigo-600 text-gray-800'>
                            <button onClick={() => sectionScroll(0)}>Home</button>
                        </li>
                        <li className='hover:text-indigo-600 text-gray-800'>
                            <button onClick={() => sectionScroll(1)}>About</button>
                        </li>
                        <li className='hover:text-indigo-600 text-gray-800'>
                            <button onClick={() => sectionScroll(2)}>Portfolio</button>
                        </li>
                        <li className='hover:text-indigo-600 text-gray-800'>
                            <button onClick={() => sectionScroll(3)}>Contact</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar