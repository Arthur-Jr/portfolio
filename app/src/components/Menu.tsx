'use client';

import { slide as HamMenu } from 'react-burger-menu';
import { useState } from 'react';
import Link from 'next/link';

import { links } from  '../constants/data';
import './menu.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuStatus = (status: boolean) => {
    if (isOpen != status) {
      setIsOpen(status);
    }
  }

  return (
    <HamMenu
    onClose={ () => handleMenuStatus(false)}
    onOpen={() => handleMenuStatus(true)}
    isOpen={isOpen}
    right
    noTransition
    noOverlay
    >
      <ul className="w-full h-full bm-ul">
        {links.map(({ name, hash }) => (
          <li key={hash} className="bm-li">
            <Link onClick={() => handleMenuStatus(false)} href={hash}>{name}</Link>
          </li>
        ))}
      </ul>
    </HamMenu>
  )
}
