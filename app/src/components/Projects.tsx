'use client';

import Image from "next/image";
import Link from "next/link";

import { socialLinks } from "@/constants/data";
import { projects } from "@/constants/projects";
import upArrow from "../../public/up-arrow-icon.svg";
import "./projects.css";

export default function Projects() {
  const openLink = (url: string, target: EventTarget) => {
    if ((target as HTMLButtonElement).tagName === 'BUTTON') {
      window.open(url, '_blank');
    }
  }

  return (
    <section className="mt-[-4rem] w-[93%] md:w-[85%] flex flex-col items-center mb-16">
      <h1 className="text-[1.5rem] sm:text-[1.7rem] mb-6 italic font-semibold scroll-mt-[5.5rem]" id="projects">
        Projetos
      </h1>

      <div className="w-full h-full mb-10 projects-div-grid">
        {projects.map(({ siteLink, gihubLink, id, name, text }) => (
          <button
            key={id}
            className={`item-${id} project-card`}
            type="button"
            onClick={(e) => openLink(siteLink, e.target)}
          >
            <div className="info-div">
              <div className="flex flex-col justify-around h-[80%]">
                <h2 className="project-name">{name}</h2>
                <p className="project-text">{text}</p>
              </div>

              <div className="links-div">
                <Link href={siteLink} target="_blank">Ver Site ➜</Link>
                <Link href={gihubLink} target="_blank">Código ➜</Link>
              </div>

              <Image src={upArrow} alt="up arrow icon" width={19} className="info-div-arrow" />
            </div>
          </button>
        ))}
      </div>

      <span className=" mb-5 text-sm italic text-center px-2 mt-6">
        No meu <Link className="font-bold underline-offset-2 underline" href={socialLinks.github} target="_blank">Github</Link> pode ser encontrado mais projetos!
      </span>
      <span className="border-t-2 border-black/30 w-[85%]"></span>
    </section>
  )
}
