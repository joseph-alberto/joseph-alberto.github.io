import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MyPhoto from '@/image/my-photo.png'
import NodeJS from '@/image/logo/node-js.png'
import ReactJS from '@/image/logo/react-js.png'
import VueJS from '@/image/logo/vue-js.png'
import AngularJS from '@/image/logo/angular-js.png'
import NextJS from '@/image/logo/next-js.png'
import Laravel from '@/image/logo/laravel.png'
import CodeIgniter from '@/image/logo/code-igniter.png'
import Tailwind from '@/image/logo/tailwind.png'
import { AiOutlineSend } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className=''>
            <p className='text-3xl mt-4 text-gray-600'>Contact</p>
            <p className='text-sm mt-4 text-gray-500'>
                {
                    `Experienced 3 year in website development since 2020 the first time that
                    i've made my first project for client needs, then i really love to explore more a lot
                    about web development to help solve a problem in business with a website. I create a website with JavaScript
                    as a core languange in Frontend and PHP to create script in server as a Backend.`
                }
            </p>
            <div className='flex flex-col mt-8'>
                <label>Nama</label>
                <input className='border-b focus:outline-none' />
            </div>
            <div className='flex flex-col mt-4'>
                <label>Email</label>
                <input className='border-b focus:outline-none' />
            </div>
            <div className='flex flex-col mt-4'>
                <label>Subject</label>
                <input className='border-b focus:outline-none' />
            </div>
            <div className='flex flex-col mt-4'>
                <label>Message </label>
                <input className='border-b focus:outline-none' />
            </div>
            <button className='rounded-md text-white py-2 px-4 mt-4 text-sm bg-indigo-500'>
                Send
                <AiOutlineSend className='inline ml-2' size={18} />
            </button>
        </div>
    )
}

export default Contact