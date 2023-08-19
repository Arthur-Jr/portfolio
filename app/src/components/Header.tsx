import Image from 'next/image';
import Link from 'next/link';

import profile from '../../public/profile.jpeg';
import { links } from  '../constants/data';

export default function Header() {
  return (
    <header className="flex items-center justify-between fixed min-w-full h-16 px-[4%] py-[3vw] shadow-xl">
      <section className="flex flex-row items-center justify-between w-[13.5rem]">
        <Image
          src={profile}
          alt="profile pic"
          width={60}
          className="rounded-full border-4 border-double border-gray-400 bg-gray-300" 
        />

        <span className="uppercase font-bold text-lg italic">
          Arthur Junior
        </span>
      </section>

      <nav className="flex w-96 max-[670px]:hidden">
        <ul className="flex flex-row justify-around w-full uppercase font-bold text-base tracking-[1px]">
          {links.map(({ name, hash }) => (
            <li key={hash} className="hover:text-primary-color">
              <Link href={hash}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
