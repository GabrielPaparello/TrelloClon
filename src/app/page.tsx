"use client";
import Homenav from "../UI/components/Homenav";
import Feature from "../UI/components/Sections/Feature";
import Blog from "../UI/components/Sections/Blog";
import Hero from "../UI/components/Sections/Hero";
export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Homenav />
        </nav>
        <Hero />
      </header>
      <main>
        <article>
          <Feature />
        </article>
        <article>
          <Blog />
        </article>
      </main>
    </>
  );
}
