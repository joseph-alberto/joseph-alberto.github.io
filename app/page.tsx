import Image from "next/image"
import TeaImg from "@/src/images/tea.png"
import SmileImg from "@/src/images/smile.png"
import Container from "@/src/components/Container"
import Link from "next/link"

export default function Home() {
  const tea = (
    <Image src={TeaImg} alt='' width={23} height={23} className='inline' />
  )
  const smile = (
    <Image src={SmileImg} alt='' width={18} height={18} className='inline' />
  )
  return (
    <Container className='py-20 sm:py-24 px-4 md:px-16'>
      <div className='bg-white py-10 flex flex-col gap-4 items-center text-center '>
        <p className='text-3xl md:text-4xl font-bold w-10/12 leading-tight '>
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
        <div className="text-sm flex flex-col gap-4 pt-4 px-2 rounded-lg">
          <p className=''>
            Basically, I&apos;m just an ordinary man. I wrote ideas into a bunch
            of code.
            <br />
            Passionate to structure clean, neat, and sensible code with a modern
            technique for an advanced program.
            <br/>
          </p>
          <p className=''>
            So, that&apos;s our small chat. You&apos;ve been here looking
            through my website. Then, let me spill the tea {tea}.<br />
            Welcome to my art-work and don&apos;t hesitate to discover more thing about me{" "}
            {smile}.
          </p>
        </div>
        <div className='flex w-full justify-center gap-2 text-sm rounded-lg'>
          <Link href='/portfolio'>
            <button className='bg-cyan-400 text-white py-2 px-4 rounded-md hover:shadow-md hover:-translate-y-1 hover:shadow-cyan-400/50 hover:transition-transform transition-transform'>
              Work Result
            </button>
          </Link>
          <Link href='/about'>
            <button className='bg-rose-400 text-white py-2 px-4 rounded-md hover:shadow-md hover:-translate-y-1 hover:shadow-rose-400/50 hover:transition-transform transition-transform'>
              More about me
            </button>
          </Link>
        </div>
      </div>
      {/* <div className='bg-slate-900 h-80 rounded-lg'>To code</div> */}
    </Container>
  )
}
