"use client";
import Homenav from "./components/Homenav";
import Feature from "./components/Feature";
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
      <article >
        <Feature />
      </article>
    </>
  );
}
