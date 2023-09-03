'use client';

import Link from "next/link";
import { useState } from "react";

import { projects } from "@/constants/projects";

export default function Projects() {
  const [projectId, setProjectId] = useState(0);

  return (
    <section className="mt-[-4rem] w-full flex flex-col items-center md:h-[500px] mb-14">
      <div className="flex items-center flex-col md:flex-row justify-around w-full h-full p-4 md:p-10">
        <div className="flex flex-col h-80">
        <h1 id="projects" className="text-[1.5rem] sm:text-[1.7rem] italic font-semibold scroll-mt-[15rem] mb-6">Projetos</h1>

          <ul className="flex flex-col justify-around h-48 p-5 border-double border-primary-color rounded-xl border-l-8 border-b-8">
            {projects.map(({ name, id }) => (
              <li key={name} className="text-[18px] font-bold leading-6 italic hover:scale-110">
                <button
                  type="button"
                  className={projectId === id ? "underline underline-offset-4" : ""}  
                  onClick={() => setProjectId(id)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between w-full min-h-[14rem] md:w-[50%] rounded-xl p-5 text-white bg-primary-color">
          <p className="font-medium text-[16px] italic">{projects[projectId].text}</p>
          
          <div className="mt-6">
            <Link
              href={projects[projectId].siteLink}
              target="_blank"
              className="mr-5 font-bold text-[16px] italic underline-offset-8 hover:underline"
            >
              Ver Site ➜
            </Link>

            <Link
              target="_blank"
              href={projects[projectId].gihubLink}
              className="font-bold text-[16px] italic underline-offset-8 hover:underline"
            >
              Código do Projeto ➜
            </Link>
          </div>
        </div>
      </div>

      <span className=" mb-8 text-sm italic text-center px-2 mt-12 md:mt-2">
        No meu <Link className="font-bold underline-offset-2 underline" href="https://github.com/Arthur-Jr">Github</Link> pode ser encontrado mais projetos, principalmente de back-end!
      </span>
      <span className="border-t-2 border-slate-300 w-[85%]"></span>
    </section>
  )
}
