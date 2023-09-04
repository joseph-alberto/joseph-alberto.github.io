import Image from "next/image"
import TeaImg from "@/src/images/tea.png"
import SmileImg from "@/src/images/smile.png"
import Container from "@/src/components/Container"
import Link from "next/link"

export default function Home() {
  const tea = (
    <Image src={TeaImg} alt='' width={25} height={25} className='inline' />
  )
  const smile = (
    <Image src={SmileImg} alt='' width={20} height={20} className='inline' />
  )
  return (
    <Container className='py-8'>
      <div className='bg-white py-10 flex flex-col gap-4 items-center text-center'>
        <p className='text-4xl font-bold mb-2 border-b border-gray-200 border-dashed w-10/12 pb-6 leading-tight'>
          Hi, I&apos;m{" "}
          <Link
            href='/about'
            className='text-rose-400 inline-block hover:-translate-y-1 transition-all'
            style={{
              filter: "drop-shadow(-2px 3px 2px rgba(251, 113, 133, 0.5))",
            }}
          >
            Joseph
          </Link>
          !
          <br />
          <Link
            href='/portfolio'
            className='text-cyan-400 inline-block hover:-translate-y-1 transition-all'
            style={{
              filter: "drop-shadow(-2px 3px 2px rgba(45, 212, 191, 0.5))",
            }}
          >
            Software Engineer
          </Link>{" "}
          from Palembang
        </p>
        <p className='text-sm text-gray-600'>
          Basically I&apos;m just an ordinary man, who writing ideas into a
          bunch of code.
          <br />
          Passionate to writing neat, clean, and sensible code with a new modern
          programming technology.
          <br />
        </p>
        <p className='text-sm text-gray-600'>
          So that&apos;s a simple intro by me. You&apos;ve already come here
          visiting my website, here&apos;s I give you a tea {tea}
          <br />
          Welcome to my website and feel free to discover more thing&apos;s
          about me here {smile}
        </p>
        <div className='flex gap-4 text-sm'>
          <Link href='/portfolio'>
            <button className='bg-cyan-400 text-white py-2 px-4 rounded-md hover:shadow-md hover:-translate-y-1 hover:shadow-cyan-400/50 hover:transition-transform transition-transform'>
              Look at my work
            </button>
          </Link>
          <Link href='/about'>
            <button className='bg-rose-400 text-white py-2 px-4 rounded-md hover:shadow-md hover:-translate-y-1 hover:shadow-rose-400/50 hover:transition-transform transition-transform'>
              More about me
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-slate-900 h-80 rounded-lg'>To code</div>
    </Container>
  )
}
