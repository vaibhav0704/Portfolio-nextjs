import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Vaibhav Saraf",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />"
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://instagram.fdel11-2.fna.fbcdn.net/v/t51.2885-19/241532203_539540037340664_2890496074952379623_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel11-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=C38eY0Ip5DsAX_wn5U9&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9RzzFM3K6IAUZ077eLsfQXNgevpTilhdSO6Dkbq8Nczw&oe=632CF60F&_nc_sid=8fd12b"
        height="160"
        width='160'
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}