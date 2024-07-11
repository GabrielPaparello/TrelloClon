import Image from "next/image";
import Link from "next/link";
import Homenav from "./components/Homenav"
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <header>
      <nav>
        <Homenav />
      </nav>
    </header>
    <main className="flex min-h-screen  items-center justify-center   p-24">
      <div className="flex flex-col justify-center content-center align-middle text-center items-center">
        <h1 className="text-7xl">Trello Clone</h1>
        <h3>Start managing the work flow of your team</h3>
        <button className="w-[200px] bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link href="projects">Get Started</Link></button>
      </div>
      <aside>
        <Image src='/assets/headerLogo.png' alt='headerImg' width={368} height={490}/>
      </aside>
    </main>
    </>
  );
}
