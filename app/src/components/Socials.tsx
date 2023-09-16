import Image from 'next/image';
import Link from 'next/link';

import linkedinIcon from '../../public/linkedin.svg';
import githubIcon from '../../public/gitHubIcon.svg';
import cvIcon from '../../public/cv-icon.svg';
import { socialLinks } from '@/constants/data';

export default function Socials() {
  const opneSocial = (url: string) => {
    window.open(url, '_blank');
  }
 
  return (
    <div
    className="flex justify-between items-center w-28"
    >
      <button
        type="button"
        onClick={() => opneSocial(socialLinks.github)}
        title="Github"
      >
        <Image
          className="bg-black hover:scale-110"
          alt="Github logo"
          src={githubIcon}
          width={30}
          height={30}
        />
      </button>

      <button
        type="button"
        onClick={() => opneSocial(socialLinks.linkedin)}
        title="Linkedin"
      >
        <Image
          className="bg-black hover:scale-110"
          alt="Linkedin logo"
          src={linkedinIcon}
          width={30}
          height={30}
        />
      </button>

      <Link href="./cv.pdf" target="_blank" title="Currículo">
        <Image
            className="hover:scale-110"
            alt="Currículo logo"
            src={cvIcon}
            width={30}
            height={30}
          />
      </Link>
    </div>
  )
}
