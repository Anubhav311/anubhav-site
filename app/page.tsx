"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaSun } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import wave from "./assets/wave.png";
import node from "./assets/icons8-nodejs-240.png";
import react from "./assets/icons8-react-native-480.png";
import mongo from "./assets/icons8-mongodb-480.png";
import postgres from "./assets/icons8-postgresql-480.png";
import aws from "./assets/icons8-amazon-web-services-480.png";
import firebase from "./assets/icons8-firebase-480.png";
import docker from "./assets/icons8-docker-240.png";
import next from "./assets/NEXTJS/icon/dark-background/nextjs-icon-dark-background.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <main
      className={
        darkMode
          ? "flex min-h-screen flex-col items-center justify-around p-24"
          : "flex min-h-screen flex-col items-center justify-around p-24 text-black bg-white"
      }
    >
      <div className="ml-10 pt-7 font-bold absolute top-0 left-0">
        <p>Anubhav Bhambri</p>
      </div>
      <div className="mr-10 pt-7 font-bold absolute top-0 right-0">
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <BsFillSunFill size={25} />
          ) : (
            <BsFillMoonStarsFill size={20} />
          )}
        </button>
      </div>
      <div className="flex items-center w-3/4">
        <MainContent />
        <DisplayPic />
      </div>
      <TechStack />
    </main>
  );
}

function MainContent() {
  return (
    <div>
      <div className="flex items-center justify-start mb-10 relative w-3/4">
        <p className="text-6xl font-extrabold">Full-Stack MERN Developer</p>
        <Image
          className="absolute bottom-0 right-20"
          alt="wave-hand"
          // src="https://avatars.githubusercontent.com/u/30749439?v=4"
          src={wave}
          width={60}
          height={60}
        />
      </div>
      <p className="w-3/4 text-lg">
        Hi, I&apos;m Anubhav Bhambri. A passionate Software Development Engineer
        based in New Delhi, India. 📍
      </p>
      <div className="flex mt-8">
        <Link href="https://github.com/Anubhav311" target="_blank">
          <AiFillGithub size={35} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/anubhav-bhambri/"
          target="_blank"
        >
          <AiFillLinkedin size={35} style={{ marginLeft: "15px" }} />
        </Link>
        <Link href="https://twitter.com/anubhav_bhambri" target="_blank">
          <FaTwitter size={35} style={{ marginLeft: "15px" }} />
        </Link>
        {/* <AiFillYoutube size={35} /> */}
        {/* <AiFillInstagram size={35} /> */}
      </div>
    </div>
  );
}

function DisplayPic() {
  return (
    <div className="rounded-full truncate select-none">
      <Image
        alt="dp"
        src="https://avatars.githubusercontent.com/u/30749439?v=4"
        // src="/favicon.ico"
        width={350}
        height={350}
      />
    </div>
  );
}

function TechStack() {
  const techIconsSize = 40;
  return (
    <div className="flex items-center w-3/4">
      <div>
        <p className="font-medium">Tech Stack &nbsp; &nbsp; | &nbsp; &nbsp;</p>
      </div>
      <Image
        className="ml-5"
        alt="node"
        src={node}
        width={techIconsSize}
        height={techIconsSize}
      />
      <Image
        className="ml-5"
        alt="react"
        src={react}
        width={techIconsSize}
        height={techIconsSize}
      />
      <Image
        className="ml-5"
        alt="next"
        src={next}
        width={techIconsSize}
        height={techIconsSize}
      />
      <Image
        className="ml-5"
        alt="mongo"
        src={mongo}
        width={techIconsSize}
        height={techIconsSize}
      />
      <Image
        className="ml-5"
        alt="postgres"
        src={postgres}
        width={techIconsSize}
        height={techIconsSize}
      />
      <Image
        className="ml-5"
        alt="aws"
        src={aws}
        width={techIconsSize}
        height={techIconsSize}
      />
      <Image
        className="ml-5"
        alt="firebase"
        src={firebase}
        width={techIconsSize}
        height={techIconsSize}
      />
      <Image
        className="ml-5"
        alt="docker"
        src={docker}
        width={techIconsSize}
        height={techIconsSize}
      />
    </div>
  );
}
