import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";

import deved from "../public/image 1.png"

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main className="bg-white">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between bg-slate-300 px-10 w-auto">
            <h1 className="text-xl font-burtons ">developedbynate</h1>
            <ul className="flex justify-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"></BsFillMoonStarsFill>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-xl ml-8"href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-burtons">Nathan Maniego</h2>
            <h3 className="text-2xl py-2">Computer Science Student</h3>
            <p className="text-base py-2 leading-8 text-gray-800 ">Second year computer science student at the University of Toronto.
              Passionate about Software Engineering and making money! </p>
          </div>
          <div className="text-5xl flex  justify-center gap-16 py-3 text-gray-700"> 
            <a href="https://www.linkedin.com/in/nathanmaniego/" target="_blank"><AiFillLinkedin className="cursor-pointer"></AiFillLinkedin></a>
            <a href="https://www.youtube.com/watch?v=qTsjNWglgNk&t=22s" target="_blank" ><AiFillYoutube className="cursor-pointer"></AiFillYoutube></a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image src={deved} alt="nathanmaniego avatar" layout="fill" objectFit="cover"></Image>
          </div>
          
        </section>
      </main>
    </div>
  
  )

}
