"use client";
import Homenav from "../UI/components/Homenav";
import Feature from "../UI/Sections/Feature";
import Blog from "../UI/Sections/Blog";
import Hero from "../UI/Sections/Hero";
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
