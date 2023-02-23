import Head from 'next/head'
import Layout from '@/components/generic/Layout'
import { useEffect, } from 'react';
import { useScroll } from '@/hooks/Scroll';
import { BiChevronDown } from "react-icons/bi";
import Home from '@/components/page/Home'
import About from '@/components/page/About';
import Portfolio from '@/components/page/Portfolio';
import Contact from '@/components/page/Contact';

export default function Index() {

  const { pageScroll } = useScroll()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.addEventListener('wheel', (e) => {
      console.log(e.deltaY > 0 ? 'scroll turun' : 'scroll naik')
      pageScroll(e.deltaY > 0)
    })
  }, [pageScroll])

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        {/* Fixed Scroll Down Button */}
        <button className='fixed bottom-10 right-28' onClick={() => pageScroll(1)}>
          Scroll Down
          <BiChevronDown className='inline text-indigo-500' size={20} />
        </button>

        {/* Home Section */}
        <div className='min-h-screen flex place-items-center'>
          <Home />
        </div>

        {/* About Section */}
        <div className='min-h-screen flex place-items-center'>
          <About />
        </div>

        {/* Portfolio Section */}
        <div className='min-h-screen flex place-items-center'>
          <Portfolio />
        </div>

        {/* Contact Section */}
        <div className='min-h-screen flex pt-20'>
          <Contact />
        </div>
      </Layout>
    </>
  )
}
