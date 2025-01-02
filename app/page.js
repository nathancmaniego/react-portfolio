import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";

import deved from "../public/image 1.png"
import p1 from "../public/design.png"
import p2 from "../public/code.png"
import p3 from "../public/consulting.png"


export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main className="bg-white ">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between bg-white px-10 w-auto">
            <h1 className="text-xl font-burtons ">nathan maniego website</h1>
            <ul className="flex justify-center">
              <li><a className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-xl ml-8"href="https://drive.google.com/file/d/1dn2lhqgCZvvIeTeGY24pvZ27yGr70kEj/view?usp=sharing">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-purple-600 font-burtons">Nathan Maniego</h2>
            <h3 className="text-2xl py-2">Computer Science Student</h3>
            <p className="text-base py-2 leading-8 text-gray-800 ">Second year computer science student at the University of Toronto.
              Passionate about Software Engineering and Machine Learning! </p>
          <div className="relative bg-gradient-to-b from-purple-500 rounded-full w-80 h-80 mx-auto mt-10 overflow-hidden">
            <Image src={deved} alt="nathanmaniego avatar" layout="fill" objectFit="cover"></Image>
          </div>
          </div>
          <div className="text-5xl flex  justify-center gap- text-gray-700"> 
            <a href="https://www.linkedin.com/in/nathanmaniego/" target="_blank"><AiFillLinkedin className="cursor-pointer"></AiFillLinkedin></a>
            <a href="https://www.youtube.com/watch?v=qTsjNWglgNk&t=22s" target="_blank" ><AiFillYoutube className="cursor-pointer"></AiFillYoutube></a>
          </div>  
        </section>
          <section className="px-10">
            <div>
              <h3 className=" text-3xl ">About Me</h3>
              <p className=" leading-8 text-md  py-4 text-gray-800">
              I’m a computer science enthusiast with a passion for writing clean, efficient code and exploring emerging technologies. Always eager to learn and adapt, I enjoy diving into <span className="text-purple-500"> complex problems, optimizing algorithms, and contributing to collaborative software projects.</span> Whether I’m developing applications, experimenting with new programming languages, or refining my systems design skills, I bring curiosity, precision, and a growth mindset to everything I do.
              </p>
            </div>
            <div className="lg:flex gap-20">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1" >
                <div className="flex justify-center ">
                <Image alt={"project1"}src={p2} width={100} height={100}></Image>
                </div>
                
                <h3 className="text-lg font-medium pt-8 pb-2">Project Bleu</h3>
                <p className="py-2">
                  Developed and deployed a Random Forest machine learning model with advanced data visualization tools to optimize stormwater management through blue roof systems, achieving 80% retention and 
                  earning an Honourable Mention Award for our innovative solution.
                </p>
                <h4 className="py-2 text-purple-800">Code tools I used</h4>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Pandas</p>
                <p className="text-gray-800 py-1">React JS</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1" >
                <div className="flex justify-center ">
                <Image alt={"project1"}src={p1} width={100} height={100}></Image>
                </div>
                
                <h3 className="text-lg font-medium pt-8 pb-2">S&P 500 Stock Predictor</h3>
                <p className="py-2">
                  Developed a Random Forest machine learning model to predict daily movements of the S&P 500 index, achieving a 54% precision score by integrating advanced features like multi-horizon rolling averages and trend ratios from decades of historical data.
                </p>
                <h4 className="py-2 text-purple-800">Code tools I used</h4>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Pandas</p>
                <p className="text-gray-800 py-1">Matplotlib</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1" >
                <div className="flex justify-center ">
                <Image alt={"project1"}src={p3} width={100} height={100}></Image>
                </div>
                
                <h3 className="text-lg font-medium pt-8 pb-2">MS Paint Inspired Clone</h3>
                <p className="py-2">
                  Developed a Java-based paint application with tools for drawing, shape selection, and customizable color and size options, incorporating real-time feedback for enhanced user engagement. Integrated the Ollama API for seamless parseable file compatibility.
                </p>
                <h4 className="py-2 text-purple-800">Code tools I used</h4>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">JavaFX</p>
                <p className="text-gray-800 py-1">Ollama3</p>
              </div>
            </div>
          </section>
          
          
          <footer className="bg-purple-100 text-gray-800 py-8 px-10 mt-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2025 Nathan Maniego. All Rights Reserved.
            </p>
            <ul className="flex justify-center gap-4 mt-4 md:mt-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/nathanmaniego/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="mailto:nathancarlomaniego@gmail.com"
                  className="hover:text-purple-500 transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  
  )

}
