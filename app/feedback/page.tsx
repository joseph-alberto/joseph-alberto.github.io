import Container from "@/src/components/Container"
import React from "react"

const Page = () => {
  return (
    <Container className='py-6'>
      <h1 className='text-4xl font-bold mb-4'>Feedback</h1>
      <div className='flex flex-col gap-2 pb-4'>
        <p className='text-sm mb-2'>
          If you have any feedback or comment just let me now by filling the
          form below. Your feedback will really usefull for me, Thank you.
        </p>
        <div className='flex gap-4'>
          <div className='flex flex-col w-full gap-1'>
            <label className='text-sm'>Name</label>
            <input
              type='text'
              className='w-full py-1.5 px-4 border rounded-md text-sm'
              placeholder='Enter Name'
            />
          </div>
          <div className='flex flex-col w-full gap-1'>
            <label className='text-sm'>Email</label>
            <input
              type='text'
              className='w-full py-1.5 px-4 border rounded-md text-sm'
              placeholder='Enter Email'
            />
          </div>
        </div>
        <div>
          <label className='text-sm'>Feedback</label>
          <textarea
            rows={4}
            className='w-full py-2 px-4 border rounded-md text-sm'
            placeholder='Enter Feedback'
          ></textarea>
        </div>
        <div className='pt-2 pb-3 flex justify-end'>
          <button className='bg-cyan-400 py-2 px-3 text-white rounded-md text-sm'>
            Submit
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Page
