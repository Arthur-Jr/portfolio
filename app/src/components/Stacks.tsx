import Image from 'next/image';

import './stacks.css';
import { stackData } from '@/constants/data';

export default function Stacks() {
  return (
    <section
      className="flex flex-col justify-center bg-white w-[87%] relative bottom-36 rounded-2xl shadow-md shadow-slate-400 sm:w-[91%] md:flex-row scroll-mt-24"
      id="stacks"
    >
      {stackData.map(({ title, desciption, list, logo }) => (
        <div key={title} className="stack-box">
          <Image src={logo} alt={`${title}-icon`} width={85}/>
          <h2 className="stack-title">{title}</h2>
          <p className="stack-description">{desciption}</p>
          <h3 className="text-primary-color text-[18px] font-bold leading-6">Stacks:</h3>
          <ul className="mt-4 text-center font-medium text-[16px] italic tracking-wide">
            {list.map((stack) => <li key={stack}>{stack}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}
