import Link from "next/link";
import Image from "next/image";
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";

export default function Home() {
  return (
    <main className=" px-10 lg:flex lg:flex-row-reverse lg:mt-32">
      <div className=" flex justify-center my-5 lg:mx-40">
      <Image 
        width={0}
        height={0}
        sizes="60vw"
        src="/profile.jpg" 
        alt="A picture of me :D"
        className=" w-72 h-auto rounded-full lg:mx-16 lg:h-72 lg:w-[33rem] "
        priority
        />
      </div>

      <div className=" lg:w-[60rem] lg:ml-16 lg:mt-12">
        <h1 className="text-2xl lg:text-4xl font-semibold">
          Hi, I&apos;m 
          <span className=" text-orange-600"> Banateanu Razvan</span>
        </h1> 
        <h3 className="text-xl lg:text-2xl font-semibold my-1 text-stroke-3">Software Engineer</h3>
        <p className=" text-justify lg:text-lg">I am driven to tackle challenging projects, constantly develop my skills,
          and deliver innovative solutions. <br/>
          I believe that pushing the boundaries is essential
          for personal growth. </p>
        <Link href="contact">
          <button className=" bg-orange-600 hover:bg-orange-400 text-orange-200 rounded-md text-xl  p-1 my-2 hover:text-red-600 transition-colors duration-1000">
            Let&apos;s Talk
          </button>
        </Link>

        <div className="flex w-5 justify-between mt-2">
          <Link href="https://www.linkedin.com/in/razvan-banateanu-739b761a7/" className="border mr-3 border-black rounded-3xl p-1 hover:bg-orange-600 transition-colors duration-1000">
            <FaLinkedin className=" size-6 lg:size-8 " />
          </Link>
          <Link href="https://github.com/RazvanBanateanu" className="border mr-3 border-black rounded-3xl p-1 hover:bg-orange-600 transition-colors  duration-1000 ">
            <FaGithub className=" size-6 lg:size-8" />
          </Link>
          <Link href="https://www.instagram.com/back2basic4/" className="border border-black rounded-3xl p-1 hover:bg-orange-600 transition-colors  duration-1000">
            <FaInstagram className=" size-6 lg:size-8" />
          </Link>
        </div>
      </div>
    </main>
  );
}
