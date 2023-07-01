import Image from "next/image";
import wave from "./assets/wave.png";

export default function Home() {
  const techIconsSize = 40;
  return (
    <div className="bg-white text-black">
      <div className="ml-10 pt-5 font-bold">
        <p>Anubhav</p>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-around p-24">
        <div className="flex items-center w-3/4">
          <div>
            <div className="flex items-center justify-start mb-10">
              <p className="text-6xl font-extrabold">
                Full-Stack MERN Developer
              </p>
              <Image
                className="ml-3"
                alt="wave-hand"
                // src="https://avatars.githubusercontent.com/u/30749439?v=4"
                src={wave}
                width={70}
                height={70}
              />
            </div>
            <p className="w-3/4">
              Hi, I&apos;m Anubhav Bhambri. A passionate Software Development
              Engineer based in New Delhi, India. 📍
            </p>
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
    </div>
  );
}
