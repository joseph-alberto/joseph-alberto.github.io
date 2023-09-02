import React from "react"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='container flex flex-col mx-auto py-12 text-gray-600 text-sm'>
      <div>
        <span className=''>©</span> 2023 Joseph Web&apos;s.
      </div>
      <div>
          <ul className="flex gap-4">
            <li>A</li>
            <li>B</li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer
