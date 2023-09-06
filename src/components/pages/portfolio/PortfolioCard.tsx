import Image from "next/image"
import React from "react"
import { Portfolio } from "@/src/interfaces/Portfolio"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6"
import { IoIosGlobe } from "react-icons/io";

type Props = {
  portfolio: Portfolio
}

const PortfolioCard = ({ portfolio }: Props) => {
  return (
    <div className='min-w-40 min-h-full flex flex-col gap-4 overflow-hidden rounded-xl shadow-lg hover:shadow-lg hover:shadow-cyan-700/40 hover:-translate-y-2 transition-transform'>
      <div className='relative justify-self-center'>
        {/* Should use 600x300 thumbnail */}
        <Image
          src={`${process.env.NEXT_PUBLIC_URL}${portfolio.image_path}`}
          priority={true}
          alt='img'
          className='h-60'
          width={0}
          height={0}
          style={{
            width: "100%",
            objectFit: "contain",
          }}
        />
        <div className='text-sm px-4 py-2 flex justify-between place-items-center gap-2 mb-4 w-full absolute -bottom-4 bg-gray-800/70'>
          <div className='text-white font-bold'>{portfolio.title}</div>
          <div className='text-white font-bold px-1.5 py-0.5 bg-cyan-500 rounded-md'>
            {portfolio.year}
          </div>
        </div>
      </div>
      <div className='px-4 pb-6 flex flex-col gap-2 h-full'>
        <div className='text-sm'>{portfolio.description}</div>
        <div className='flex flex-row-reverse h-full place-items-end gap-1'>
          {typeof portfolio.link == "string" && (<Link href={portfolio.link} target='_blank'>
            <button className='p-2 border rounded-md shadow-md hover:bg-gray-200'>
              <IoIosGlobe size={16}/>
            </button>
          </Link>)}
          {typeof portfolio.github_link == "string" && (<Link href={portfolio.github_link} target='_blank'>
            <button className='p-2 border rounded-md shadow-md hover:bg-gray-200'>
              <FaGithub size={16}/>
            </button>
          </Link>)}
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
