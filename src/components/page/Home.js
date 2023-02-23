import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MyPhoto from '@/image/my-photo.png'
import { AiOutlineSend } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'

const Home = () => {
    return (
        <div className='grid grid-cols-12 h-80'>
            {/* Social Media */}
            <div className='col-span-2 flex flex-col place-content-center place-items-center gap-6'>
                <Link target='_blank' href="https://www.linkedin.com/in/joseph-alberto">
                    <SlSocialLinkedin size={18} strokeWidth={20} className="text-indigo-500 hover:text-indigo-700" />
                </Link>
                <Link target='_blank' href="https://www.github.com/josephalberto24">
                    <FiGithub size={18} strokeWidth={2} className="text-indigo-500 hover:text-indigo-700" />
                </Link>
                <Link target='_blank' href="https://www.instagram.com/josephalberto_">
                    <BsInstagram size={18} className="text-indigo-500 hover:text-indigo-700" />
                </Link>
            </div>

            {/* Description */}
            <div className='col-span-6 pt-16'>
                <p className='text-5xl font-bold text-gray-800'>{`Hi, I'm Joseph`}</p>
                <p className='text-2xl mt-4 text-gray-600'>Website Developer</p>
                <p className='text-md mt-4 text-gray-500'>Experienced 3 year in web development knowladge, work as passion, producing quality work.</p>
                <button className='bg-indigo-500 py-4 px-4 rounded-md text-white text-sm mt-8 hover:bg-indigo-700 block'>
                    Contact Me
                    <AiOutlineSend className='inline ml-2' size={18} />
                </button>
            </div>

            {/* Photo */}
            <div className='col-span-4'>
                <Image
                    src={MyPhoto}
                    alt='myphoto'
                    width={300}
                />
            </div>
        </div>
    )
}

export default Home