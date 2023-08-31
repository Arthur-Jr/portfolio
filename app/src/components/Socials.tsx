import Image from 'next/image';

import linkedinIcon from '../../public/linkedin.svg';
import githubIcon from '../../public/gitHubIcon.svg';

export default function Socials() {
  const opneSocial = (url: string) => {
    window.open(url, '_blank');
  }
 
  return (
    <div
    className="flex justify-between w-24" 
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
