import Image from "next/image"
import TeaImg from "@/src/img/tea.png"
import SmileImg from "@/src/img/smile.png"

export default function Home() {
  const tea = (
    <Image src={TeaImg} alt='' width={25} height={25} className='inline' />
  )
  const smile = (
    <Image src={SmileImg} alt='' width={20} height={20} className='inline' />
  )
  return (
    <main className='container mx-auto py-6 my-6'>
      <div className='rounded-md bg-white p-10 flex flex-col gap-4 items-center text-center'>
        <p className='text-4xl font-bold mb-2 border-b border-gray-200 border-dashed w-10/12 pb-6 leading-tight'>
          Hi, I&apos;m Joseph Alberto!
          <br />
          Software Engineer from Palembang
        </p>
        <p className='text-sm text-gray-600'>
          Basically I&apos;m just an ordinary man, who writing ideas into a
          bunch of code.
          <br />
          Passionate to writing neat, clean, and sensible code with a new modern
          programming style.
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
          <button className='bg-teal-400 text-white py-2 px-4 rounded-md hover:shadow-md hover:shadow-teal-400/50 transition-colors'>
            Look at my work
          </button>
          <button className='bg-rose-400 text-white py-2 px-4 rounded-md hover:shadow-md hover:shadow-rose-400/50 transition-colors'>
            More about me
          </button>
        </div>
      </div>
      <div className='bg-slate-900 h-80 rounded-lg'>{/* To code */}</div>
    </main>
  )
}
