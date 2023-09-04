import Container from "@/src/components/Container"
import React from "react"
import WIPImg from "@/src/images/work-in-progress.png"
import Image from "next/image"

type Props = {}

const Page = (props: Props) => {
  return (
    <Container className='py-6'>
      <h1
        className='text-4xl font-bold text-rose-400 mb-6'
        style={{
          filter: "drop-shadow(-2px 3px 2px rgba(251, 113, 133, 0.5))",
        }}
      >
        About
      </h1>
      <div className="flex flex-col gap-4 place-items-center mb-32">
        <Image 
          src={WIPImg}
          alt='WIP'
          width={200}
        />
        <h1 className="text-4xl font-bold text-gray-800">*UNDER CONSTRUCTION*</h1>
        <p className="text-3xl font-medium">Come back soon...</p>
        {/* Bio:
      I'm Joseph Alberto a Software Engineer, currenlty I work Fulltime in Taniyuk as a Head of Development

      Technology I use:

      Why I choose to become a Software Engineer:

      About This Website: */}
      </div>
    </Container>
  )
}

export default Page
