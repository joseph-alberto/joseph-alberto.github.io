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

const Portfolio = () => {
    return (
        <div className='grid grid-cols-12'>
            {/* Description */}
            <div className='col-span-9'>
                <p className='text-3xl mt-4 text-gray-600'>Portfolio</p>
                <p className='text-sm mt-4 text-gray-500'>
                    {
                        `Experienced 3 year in website development since 2020 the first time that
                    i've made my first project for client needs, then i really love to explore more a lot
                    about web development to help solve a problem in business with a website. I create a website with JavaScript
                    as a core languange in Frontend and PHP to create script in server as a Backend.`
                    }
                </p>
                <p className='text-sm mt-4 text-gray-500'>
                    {
                        `There are some stacks that i've mastered so far:`
                    }
                </p>
                <div className='flex flex-wrap place-content-center place-items-end gap-8 mt-4'>
                    <div className='text-sm text-gray-500 flex flex-col items-center'>
                        <Image
                            alt='Laravel'
                            src={Laravel}
                            className='w-10 lg:w-12 mb-2'
                        />
                        Laravel
                    </div>
                    <div className='text-sm text-gray-500 flex flex-col items-center'>
                        <Image
                            alt='Code Igniter'
                            src={CodeIgniter}
                            className='w-10 lg:w-12 mb-2'
                        />
                        Code Igniter
                    </div>
                    <div className='text-sm text-gray-500 flex flex-col items-center'>
                        <Image
                            alt='Node JS Logo'
                            src={NodeJS}
                            className='w-10 lg:w-12 mb-2'
                        />
                        Node JS
                    </div>
                    <div className='text-sm text-gray-500 flex flex-col items-center'>
                        <Image
                            alt='React JS'
                            src={ReactJS}
                            className='w-10 lg:w-12 mb-2'
                        />
                        React JS
                    </div>
                    <div className='text-sm text-gray-500 flex flex-col items-center'>
                        <Image
                            alt='Next JS'
                            src={NextJS}
                            className='w-10 lg:w-12 mb-2'
                        />
                        Next JS
                    </div>
                    <div className='text-sm text-gray-500 flex flex-col items-center'>
                        <Image
                            alt='Vue JS'
                            src={VueJS}
                            className='w-10 lg:w-12 mb-2'
                        />
                        Vue JS
                    </div>
                    <div className='text-sm text-gray-500 flex flex-col items-center'>
                        <Image
                            alt='Angular JS'
                            src={AngularJS}
                            className='w-10 lg:w-12 mb-2'
                        />
                        Angular JS
                    </div>
                    <div className='text-sm text-gray-500 flex flex-col items-center'>
                        <Image
                            alt='Tailwind CSS'
                            src={Tailwind}
                            className='w-10 lg:w-12 mb-2'
                        />
                        Tailwind CSS
                    </div>
                </div>
            </div>

            {/* Photo */}
            <div className='col-span-3'>
                <Image
                    src={MyPhoto}
                    alt='myphoto'
                    width={300}
                />
            </div>
        </div>
    )
}

export default Portfolio