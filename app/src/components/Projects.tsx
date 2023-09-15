import Link from "next/link";
import Image from "next/image";

import './projects.css';
import { projects } from "@/constants/projects";
import upArrow from "../../public/up-arrow-icon.svg";

export default function Projects() {
  return (
    <section className="mt-[-4rem] w-[93%] md:w-[85%] flex flex-col items-center mb-16">
      <h1 className="text-[1.5rem] sm:text-[1.7rem] mb-6 italic font-semibold scroll-mt-[5.5rem]" id="projects">
        Projetos
      </h1>

      <div className="w-full h-full mb-10 projects-div-grid">
        {projects.map(({ siteLink, gihubLink, id, name, text, img }) => (
          <div key={id} className={`item-${id} project-card`}>
            <div className="info-div">
              <h2 className="project-name">{name}</h2>
              <p className="project-text">{text}</p>
              <div className="links-div">
                <Link href={siteLink} target="_blank">Ver Site ➜</Link>
                <Link href={gihubLink} target="_blank">Código ➜</Link>
              </div>
              <Image src={upArrow} alt="up arrow icon" width={19} className="info-div-arrow" />
            </div>
          </div>
        ))}
      </div>

      <span className=" mb-5 text-sm italic text-center px-2 mt-6">
        No meu <Link className="font-bold underline-offset-2 underline" href="https://github.com/Arthur-Jr" target="_blank">Github</Link> pode ser encontrado mais projetos!
      </span>
      <span className="border-t-2 border-black/30 w-[85%]"></span>
    </section>
  )
}
