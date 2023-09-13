'use client';

import Link from "next/link";
import { useState } from "react";

import './projects.css';
import { projects } from "@/constants/projects";

export default function Projects() {
  const [projectId, setProjectId] = useState(0);

  return (
    <section className="mt-[-4rem] w-[85%] flex flex-col items-center mb-14">
      <h1 className="text-[1.5rem] sm:text-[1.7rem] mb-6 italic font-semibold scroll-mt-[4.5rem]" id="projects">
        Projetos
      </h1>

      <div className="w-full h-full projects-div-grid mb-10">
        {projects.map((project) => (
          <div key={project.id} className={`item-${project.id} h-full bg-primary-color rounded-xl`}>
            test
          </div>
        ))}
      </div>

      <span className=" mb-5 text-sm italic text-center px-2 mt-12 md:mt-2">
        No meu <Link className="font-bold underline-offset-2 underline" href="https://github.com/Arthur-Jr">Github</Link> pode ser encontrado mais projetos!
      </span>
      <span className="border-t-2 border-slate-300 w-[85%]"></span>
    </section>
  )
}


// Ver Site ➜