import React from "react";
import Image from "next/image";
import { footerLinks, policy, socialLinks } from "./utils/rules";
import Link from "next/link";
import { Hr } from "@/UI/components/Hr";
export const Footer = () => {
  return (
    <>
      {/* -------logo y links -------*/}
      <section className="flex justify-around mt-5 items-center p-4 flex-wrap gap-5">
        {/* paginas about y contact us */}
        <article>
          <ul className="flex flex-row  gap-4">
            {footerLinks.map((link) => (
              <li key={link.title} className="flex flex-col ">
                <h3 className=" text-base tracking-wide antialiased roboto font-semibold text-gray-400">
                  {link.title}
                </h3>
                <Link
                  className="text-gray-600 text-sm roboto hover:text-gray-300"
                  href={link.path}
                >
                  {link.description}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        {/* logo */}
        <article>
          <Image
            alt="Logo Footer"
            src="/assets/branding/logoTransparent.png"
            width={100}
            height={100}
          />
        </article>
      </section>

      {/* HORIZONTAL LINE */}
      <Hr className=" h-[2px] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-25 dark:via-neutral-400" />

      {/* -------------idioma derechos y redes sociales --------------------*/}
      <section className="flex md:space-x-32 justify-center items-center p-4 flex-wrap gap-5">
        {/* Elejir idioma */}
        <article></article>
        {/* links de redes sociales... */}
        <article className="">
          <ul className="flex gap-4 ">
            {socialLinks.map((icon) => {
              const IconComponent = icon.icon;
              return (
                <li key={icon.title}>
                  <Link href={icon.path}>
                    <IconComponent className="text-white hover:text-gray-400" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
        {/* Policy form y copyright */}

        <article className="flex  text-sm text-gray-300">
          <ul className="flex gap-5">
            {policy.map((policy) => (
              <li key={policy.title}>
                {policy.title.includes("Copyright") ? (
                  <p>{policy.title}</p>
                ) : (
                  <Link href={policy.path}>{policy.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};
