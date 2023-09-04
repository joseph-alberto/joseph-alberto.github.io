import Image from "next/image"
import React from "react"
import img from "@/src/images/tailwind.png"
import { Portfolio } from "@/src/interfaces/Portfolio"
import Link from "next/link"

type Props = {
  portfolio: Portfolio
}

const PortfolioCard = ({ portfolio }: Props) => {
  return (
    <Link href={""} target='_blank'>
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
          <div className='px-4 py-2 flex justify-between place-items-center gap-2 mb-4 w-full absolute -bottom-4 bg-gray-800/70'>
            <div className='text-white font-bold text-sm'>
              {portfolio.title}
            </div>
            <div className='text-white font-bold px-1.5 py-0.5 bg-cyan-500 rounded-md text-sm'>
              {portfolio.year}
            </div>
          </div>
        </div>
        <div className='px-4 pb-6'>
          <div className='text-[13px]'>{portfolio.description}</div>
        </div>
      </div>
    </Link>
  )
}

export default PortfolioCard
