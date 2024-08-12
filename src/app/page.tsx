"use client";
import Nav from "../UI/components/nav/Nav";
import Feature from "../UI/Sections/Feature/Feature";
import Blog from "../UI/Sections/Blog/Blog";
import Hero from "../UI/Sections/Hero/Hero";
import SlideBotWopacity from "../UI/animations/SlideBotWopacity";
export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Nav />
        </nav>
        <SlideBotWopacity>
          <Hero />
        </SlideBotWopacity>
      </header>
      <main>
        <article>
          <Feature />
        </article>
        <article>
          <SlideBotWopacity>
            <Blog />
          </SlideBotWopacity>
        </article>
      </main>
    </>
  );
}
