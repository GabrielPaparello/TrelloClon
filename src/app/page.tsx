"use client"
import Image from "next/image";
import Link from "next/link";
import Homenav from "./components/Homenav";
import features from "./lib/assets/features";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
   useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % features.length);
        }, 3000); // Adjust slide duration (milliseconds)

        return () => clearInterval(interval);
    }, [features.length]);
  return (
    <>
      <header>
        <nav>
          <Homenav />
        </nav>
      </header>
      <main className="flex min-h-screen items-center  space-x-5  lg:space-x-15   p-24">
        <div className="flex flex-col  text-center ">
          <h1 className="text-[44px] text-[#F4F3F0] max-w-[576px] text-start mb-4 fira font-bold">
            Empower Your Team with BoardStack
          </h1>
          <h3 className="text-[24px] text-[#F4F3F0] max-w-[466px] text-start fira ">
            Streamline your projects and collaborate seamlessly with our
            intuitive task management platform.
          </h3>
          <div>
            <button className="w-[200px] bg-[#6ee2f5] mt-10 hover:bg-[#6ee3f5ac] text-[#21232B] font-bold py-2 px-4 rounded">
              <Link href="projects">Get Started</Link>
            </button>
            <button className="w-[200px]  text-[#21232B] font-bold py-2 px-4 rounded">
              <Link href="projects" className="text-[#6ee2f5] underline pb-4 ">
                Learn More
              </Link>
            </button>
          </div>
        </div>
        <aside className="lg:ml-20">
          <Image
            src="/assets/headerLogo.png"
            alt="headerImg"
            width={490}
            height={368}
          />
        </aside>
      </main>
      {/* Feature Section */}
      <div className='slider-container'>
      <section className="slider">
        {features.map((feature,index) => (
          <>
            <article key={feature.id} className={`slide ${index === slideIndex ? 'active' : ''}`}>
              <Image
                src={feature.imgPath}
                alt={feature.imgAlt}
                width={191}
                height={191}
              />
            </article>
            <article>
              <h2>{feature.h2}</h2>
              <h3>{feature.h3}</h3>
            </article>
          </>
        ))}
      </section>
      </div>
    </>
  );
}
