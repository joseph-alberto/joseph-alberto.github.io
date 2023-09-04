'use client'
import Modal from "@/src/components/modal/Modal"
import React from "react"
type Props = {}

const Page = (props: Props) => {
  const modalContent = (
    <div className='flex flex-col gap-2 px-6 pb-4'>
      <p className='text-xs'>
        If you have any feedback or comment just let me now by filling the form
        below. Your feedback will really usefull for me, Thank you.
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
    </div>
  )

  return (
    <Modal
      title='Feedback'
      size='lg'
      content={modalContent}
      onSubmit={() => {
        alert("Submit working...")
      }}
      button={{
        color: "success",
        text: "Submit",
      }}
    />
  )
}

export default Page
