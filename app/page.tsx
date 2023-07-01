import Image from "next/image";
import wave from "./assets/wave.png";
import node from "./assets/node.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  const techIconsSize = 40;
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 bg-white text-black">
      <div className="ml-10 pt-5 font-bold absolute top-0 left-0">
        <p>Anubhav</p>
      </div>
      <div className="flex items-center w-3/4">
        <div>
          <div className="flex items-center justify-start mb-10 relative w-3/4">
            <p className="text-6xl font-extrabold">Full-Stack MERN Developer</p>
            <Image
              className="absolute bottom-0 right-40"
              alt="wave-hand"
              // src="https://avatars.githubusercontent.com/u/30749439?v=4"
              src={wave}
              width={60}
              height={60}
            />
          </div>
          <p className="w-3/4 text-lg">
            Hi, I&apos;m Anubhav Bhambri. A passionate Software Development
            Engineer based in New Delhi, India. 📍
          </p>
          <div className="flex mt-8">
            <AiFillGithub size={35} />
            <AiFillLinkedin size={35} style={{ marginLeft: "10px" }} />
            <FaTwitter size={35} style={{ marginLeft: "10px" }} />
            {/* <AiFillYoutube size={35} /> */}
            {/* <AiFillInstagram size={35} /> */}
          </div>
          {/* <FontAwesomeIcon
              icon={faTrophy}
              size="sm"
              style={{ color: "#f1734a", marginRight: "10px" }}
            /> */}
        </div>
        <div>
          <Image
            alt="dp"
            // src="https://avatars.githubusercontent.com/u/30749439?v=4"
            src="/favicon.ico"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex items-center w-3/4">
        <div>
          <p className="font-medium">
            Tech Stack &nbsp; &nbsp; | &nbsp; &nbsp;
          </p>
        </div>
        <Image
          className="ml-3"
          alt="node"
          src="/favicon.ico"
          width={techIconsSize}
          height={techIconsSize}
        />
        <Image
          className="ml-3"
          alt="react"
          src="/favicon.ico"
          width={techIconsSize}
          height={techIconsSize}
        />
        <Image
          className="ml-3"
          alt="mongo"
          src="/favicon.ico"
          width={techIconsSize}
          height={techIconsSize}
        />
        <Image
          className="ml-3"
          alt="postgres"
          src="/favicon.ico"
          width={techIconsSize}
          height={techIconsSize}
        />
        <Image
          className="ml-3"
          alt="express"
          src="/favicon.ico"
          width={techIconsSize}
          height={techIconsSize}
        />
        <Image
          className="ml-3"
          alt="nest"
          src="/favicon.ico"
          width={techIconsSize}
          height={techIconsSize}
        />
      </div>
    </main>
  );
}
