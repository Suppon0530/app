'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import nextConfig from '../../../next.config';
const BASE_PATH = nextConfig.basePath || '';

// ヘッダーコンポーネント
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed z-10 grid w-full grid-cols-header bg-white shadow-md'>
      <div className='content-center px-4 py-2'>
        <Image
          src={`${BASE_PATH}/suppon-icon.png`}
          alt='Vercel logomark'
          width={64}
          height={64}
          priority
        />
      </div>
      <div className='content-center justify-items-center px-8'>
        <Link href='/' className='text-[2rem] font-bold text-main'>
          すっぽんゲーム
        </Link>
      </div>
      <div className='content-center justify-items-end px-4'>
        <nav className='hidden md:flex'>
          <Link href='/' className='px-2 text-center text-lg text-main hover:text-gray-900'>
            Home
          </Link>
          <Link href='/news' className='px-2 text-center text-lg text-main hover:text-gray-900'>
            News
          </Link>
          <Link href='/works' className='px-2 text-center text-lg text-main hover:text-gray-900'>
            Works
          </Link>
          <Link href='/contact' className='px-2 text-center text-lg text-main hover:text-gray-900'>
            Contact
          </Link>
        </nav>
        <div className='md:hidden'>
          <button onClick={openToggleMenu} className='text-main focus:outline-none'>
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* トグルメニュー */}
      {isOpen && (
        <div className='md:hidden'>
          <nav className='px-4 py-2'>
            <Link href='/' className='block text-main hover:text-gray-900'>
              Home
            </Link>
            <Link href='/news' className='block text-main hover:text-gray-900'>
              News
            </Link>
            <Link href='/works' className='block text-main hover:text-gray-900'>
              Works
            </Link>
            <Link href='/contact' className='block text-main hover:text-gray-900'>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
