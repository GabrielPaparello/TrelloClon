"use client";
import Nav from "../UI/components/nav/Nav";
import Feature from "../UI/Sections/Feature";
import Blog from "../UI/Sections/Blog/Blog";
import Hero from "../UI/Sections/Hero";
export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Nav />
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
