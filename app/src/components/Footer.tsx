'use client';

import React from 'react'
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="flex justify-center h-40 w-full" id="socials">    
      <div className="border-t-2 border-black/30 w-[90%] py-16 sm:p-12 flex justify-between h-24">
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-lg sm:text-2xl italic">Arthur Junior</h2>
          <span className="italic text-sm sm:text-base">Full Stack Web Developer</span>
        </div>
        <Socials />
      </div>
    </footer>
  )
}
