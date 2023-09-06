import Container from "@/src/components/Container"
import React from "react"
import WIPImg from "@/src/images/work-in-progress.png"
import Image from "next/image"
import Link from "next/link"

type Props = {}

const Page = (props: Props) => {
  return (
    <Container className='py-20 sm:py-24 px-4 md:px-20 xl:px-4'>
      <h1
        className='text-2xl xs:text-3xl md:text-4xl font-bold text-rose-400 mb-6'
        style={{
          filter: "drop-shadow(-2px 3px 2px rgba(251, 113, 133, 0.5))",
        }}
      >
        About
      </h1>
      <div className='grid md:grid-cols-12 gap-4 md:gap-4 mb-20'>
        <div className='border w-80 md:w-auto col-span-3 md:col-span-6 lg:col-span-5 xl:col-span-4 h-72 bg-rose-50 rounded-md shadow-lg flex place-items-center justify-center place-self-center md:place-self-auto'>
          Photo
        </div>
        <div className='col-span-3 md:col-span-6 lg:col-span-7 xl:col-span-8 text-sm shadow-lg border rounded-md py-4 px-4'>
          <div className='text-xl font-bold mb-2'>Joseph Alberto</div>
          <div className="flex flex-col gap-4">
          <p>
            I&apos;m a <span className='font-semibold'>Software Engineer</span>{" "}
            who work at <span className='font-semibold'>Taniyuk Office</span> as
            a <span className='font-semibold'>Head of Development</span>, where
            I developed application for over 1.500 rubber smallholder in South
            Sumatera, helping them to sell their crop directly to industries
            through an application.
          </p>
          <p>
            I like to explore about{" "}
            <span className='font-semibold'>JavaScript</span> technology, especially{" "}
            <span className='font-semibold'>Node.JS</span> and{" "}
            <span className='font-semibold'>React.JS</span>, as you can see on
            my{" "}
            <Link
            target="_blank"
              href='/portfolio'
              className='text-cyan-400 font-medium hover:border-b-2 hover:border-dotted hover:border-cyan-500'
            >
              portfolio page
            </Link>
            , there is some project I&apos;ve made with it, and also I&apos;m
            using <span className='font-semibold'>TypeScript</span> which that
            is reliable to maintain errors and bug at compile time, rather than
            at runtime.
          </p>
          <p>
            And I&apos;m passionate to structure clean, neat, and sensible code
            with a new technique for an advanced program, and I really love to
            stay update with the latest trends of software development especially web development.
          </p>
          </div>
        </div>
      </div>
      {/* I really proud with what I have achived here, because we creating application 
        for saving over more than 1.000 life of rubber farmer that already trapped in long
        trading chain for a couple years that make them lose some much money.  */}
      {/* Bio:
      I'm Joseph Alberto a Software Engineer, currenlty I work Fulltime in Taniyuk as a Head of Development

      Technology I use:

      Why I choose to become a Software Engineer:

      About This Website: 
      1. Bio
2. Why I choose to become a Software Engineer
3. Career
4. This Website
5. Technology
6. Social Media/Contact
      */}
    </Container>
  )
}

export default Page
