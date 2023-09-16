import Image from 'next/image';

import linkedinIcon from '../../public/linkedin.svg';
import githubIcon from '../../public/gitHubIcon.svg';
import { socialLinks } from '@/constants/data';

export default function Socials() {
  const opneSocial = (url: string) => {
    window.open(url, '_blank');
  }
 
  return (
    <div
    className="flex justify-between items-center w-20" 
    >
      <button
        type="button"
        onClick={() => opneSocial(socialLinks.github)}
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
      >
        <Image
          className="bg-black hover:scale-110"
          alt="Linkedin logo"
          src={linkedinIcon}
          width={30}
          height={30}
        />
      </button>
    </div>
  )
}
