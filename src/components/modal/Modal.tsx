'use client'
import React from "react"
import Container from "../Container"
import { useRouter } from "next/navigation"

type Props = {
  title?: string
  content: JSX.Element | string | never
  onClose?: () => void
  onSubmit: () => void
  button?: {
    color: "success" | "error" | "warning"
    text: string
  }
  size?: "sm" | "md" | "lg"
}

const Modal = ({
  title,
  content,
  onClose,
  onSubmit,
  button,
  size = "md",
}: Props) => {
  const router = useRouter()
  const classSize = {
    sm: "w-[20rem]",
    md: "w-[30rem]",
    lg: "w-[40rem]",
  }

  const defaultOnClose = () => router.back()

  return (
    <div className='fixed top-0 w-full h-screen bg-gray-900/30 z-50'>
      <Container className='pt-10'>
        <div
          className={`bg-white ${classSize[size]} mx-auto py-2 rounded-md relative`}
        >
          {/* Dismiss Button */}
          <div className='absolute right-7 top-4'>
            <button onClick={onClose || defaultOnClose}>x</button>
          </div>
          {/* Modal Title */}
          {title && (
            <div className='pt-2 pb-2 font-bold mx-6 mb-5'>{title}</div>
          )}
          {/* Modal Body */}
          {content}

          {/* Modal Footer */}
          {button && (
            <div className='pt-2 pb-3 mx-6 flex justify-end'>
              <button className='bg-cyan-400 py-2 px-3 text-white rounded-md text-sm'>
                {button.text}
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Modal
