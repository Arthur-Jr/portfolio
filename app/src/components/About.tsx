import { aboutMeText } from "@/constants/data";

export default function About() {
  return (
    <section 
    id="about"
    className="flex justify-center w-full pb-44 text-white bg-primary-color"
    >
      <div className="flex items-center flex-col text-center mt-32 w-full sm:w-[75%] h-[40%]">
        <h1 className="font-extrabold sm:text-[1.7rem] text-[1.5rem] italic">Olá, Me chamo Arthur.</h1>
        <p className="font-medium break-words text-[1.3em] p-4">
          Eu sou um <em className="font-bold">Desenvolvedor Web Full Stack</em>.
          {aboutMeText}

          <br/>
          <br/>

          Eu estou aberto a oportunidades de trabalho onde eu possa contribuir, aprender e me desenvolver.
          Se você tiver uma oportunidade que seja compatível com minhas habilidades e experiências entre em contato.
        </p>
      </div>
   </section>
  )
}
