import Image from 'next/image';

import linkedinIcon from '../../public/linkedin.svg';
import githubIcon from '../../public/gitHubIcon.svg';

export default function Socials() {
  const opneSocial = (url: string) => {
    window.open(url, '_blank');
  }
 
  return (
    <div
    className="hidden md:flex justify-between flex-col absolute left-[0px] top-[1650px] h-32 p-3 shadow-lg shadow-slate-400 bg-white"
    >
      <button
        type="button"
        onClick={() => opneSocial('https://github.com/Arthur-Jr')}
      >
        <Image
          className="bg-black rounded-full hover:scale-110"
          alt="Github logo"
          src={githubIcon}
          width={40}
          height={40}
        />
      </button>

      <button
        type="button"
        onClick={() => opneSocial('https://www.linkedin.com/in/arthur-jr/')}
      >
        <Image
          className="bg-black rounded-full hover:scale-110"
          alt="Linkedin logo"
          src={linkedinIcon}
          width={40}
          height={40}
        />
      </button>
    </div>
  )
}
