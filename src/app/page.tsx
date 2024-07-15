"use client";
import Homenav from "./components/Homenav";
import Feature from "./components/Sections/Feature";
import Blog from "./components/Sections/Blog";
import Hero from "./components/Sections/Hero";
export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Homenav />
        </nav>
      </header>
      <main>
        <Hero />
      </main>
      <article>
        <Feature />
      </article>
      <article>
        <Blog />
      </article>
    </>
  );
}
