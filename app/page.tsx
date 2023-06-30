import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <div className="ml-10 pt-5 font-bold">
        <p>Anubhav</p>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-around p-24">
        <div className="flex items-center w-3/4">
          <div>
            <h1 className="text-6xl font-extrabold mb-10">Software Engineer</h1>
            <p className="w-3/4">
              Hi, I&apos;m Anubhav Bhambri. A passionate Software Development
              Engineer based in New Delhi, India. 📍
            </p>
          </div>
          <div>
            <Image alt="dp" src="/favicon.ico" width={200} height={200} />
          </div>
        </div>
        <div>
          <p>
            TECH STACK | Node React Mongo Postgres Firebase AWS Tailwind Express
            Nest
          </p>
        </div>
      </main>
    </div>
  );
}
