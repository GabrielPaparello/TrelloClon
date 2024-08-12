"use client";
import Feature from "../UI/Sections/Feature/Feature";
import Blog from "../UI/Sections/Blog/Blog";
import Hero from "../UI/Sections/Hero/Hero";
export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <section>
          <Feature />
        </section>
        <section>
          <Blog />
        </section>
      </main>
    </>
  );
}
