import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

const Footer = () => {

  const socialLinks = [
    {
      icon: (<FaGithub size={18} className='hover:text-cyan-500 hover:transition-colors transition-colors'/>),
      url: "https://github.com/joseph-alberto",
    },
    {
      icon: (<FaLinkedin size={19} className='hover:text-cyan-500 hover:transition-colors transition-colors'/>),
      url: "https://linkedin.com/in/joseph-alberto",
    },
  ]

  return (
    <footer className='container flex flex-col gap-4 mx-auto py-12 px-4 text-gray-600 text-sm'>
      <hr />
      <div>
        <span className=''>©</span> 2023{" "}
        <Link href={''}>Joseph&apos;s Web</Link>
      </div>
      <div>
        <ul className='flex'>
          {socialLinks.map((social,i)=>(
            <li className="pr-2 pl-2 border-r" key={i}>
              <Link target="_blank" href={social.url}>{social.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
