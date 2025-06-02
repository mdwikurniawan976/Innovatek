"use client";
import React, { useEffect, useState } from 'react'
import { navLinks } from '@/app/contants/contants'
import { HiBars3 } from 'react-icons/hi2';
import Link from 'next/link';


type Props = {
  openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      // ubah berdasarkan tinggi hero section (80vh)
      setNavbg(window.scrollY >= window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const textColor = navbg ? "text-black" : "text-white";

  return (
    <div
      className={`fixed w-full z-[100] transition-all duration-300 ${navbg ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="flex items-center h-[12vh] justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <h1 className={`text-xl md:text-2xl font-bold ${textColor}`}>
            Innovatek
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-5 ml-auto mr-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`hover:text-green-600 font-semibold transition-all duration-200 ${textColor}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: Button & Burger */}
        <div className="flex items-center space-x-6">
          <HiBars3
            onClick={openNav}
            className={`w-8 h-8 cursor-pointer lg:hidden ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};
export default Nav