import Image from "next/image";
import Link from "next/link";
import Homenav from "./components/Homenav"


export default function Home() {
  return (
    <>
    <header>
      <nav>
        <Homenav />
      </nav>
    </header>
    <main className="flex min-h-screen items-center  space-x-5    p-24">
      <div className="flex flex-col  text-center ">
        <h1 className="text-[44px] text-[#F4F3F0] max-w-[576px] text-start mb-4 fira font-bold">Empower Your Team with BoardStack</h1>
          <h3 className="text-[24px] text-[#F4F3F0] max-w-[466px] text-start">Streamline your projects and collaborate seamlessly with our intuitive task management platform.</h3>
          <div>
            <button className="w-[200px] bg-[#6ee2f5] mt-10 hover:bg-[#6ee3f5ac] text-[#21232B] font-bold py-2 px-4 rounded"><Link href="projects">Get Started</Link></button>
            <button className="w-[200px]  text-[#21232B] font-bold py-2 px-4 rounded"><Link href="projects" className="text-[#6ee2f5] underline pb-4 ">Learn More</Link></button>

          </div>
          
      </div>
      <aside>
        <Image src='/assets/headerLogo.png' alt='headerImg' width={490} height={368}/>
      </aside>
    </main>
    </>
  );
}
