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
    <Container className='py-20 sm:py-24 px-4 md:px-16 xl:px-4'>
      <div className='bg-white py-10 flex flex-col gap-4 items-center text-center'>
        <p className='text-2xl xs:text-3xl md:text-4xl font-bold mb-2 border-b border-gray-200 border-dashed w-10/12 pb-6 leading-tight'>
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
        <div className="md:px-0 text-sm flex flex-col gap-4">
          <p className='text-gray-600'>
            Basically, I&apos;m just an ordinary man. I wrote ideas into a bunch
            of code,
            <br className="hidden sm:block" />
            passionate to structure neat, clean, and sensible program with a new
            technique for an advanced society.
            <br className="hidden sm:block" />
          </p>
          <p className='text-gray-600'>
            So, that&apos;s our small chat. You&apos;ve been here looking
            through my work result. Then, let me spill the tea {tea}.
            Welcome to my art-work and don&apos;t hesitate to dig more about me{" "}
            {smile}.
          </p>
        </div>
        <div className='flex gap-4 text-xs sm:text-sm'>
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
