'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

// ヘッダーコンポーネント
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='grid-cols-header fixed z-10 grid w-full bg-white shadow-md'>
      <div className='content-center px-4 py-2'>
        <Image src='/suppon-icon.png' alt='Vercel logomark' width={64} height={64} priority />
      </div>
      <div className='content-center justify-items-center px-8'>
        <Link href='/' className='text-main text-[2rem] font-bold'>
          すっぽんゲーム
        </Link>
      </div>
      <div className='content-center justify-items-end px-4'>
        <nav className='hidden md:flex'>
          <Link href='/' className='text-main px-2 text-center text-lg hover:text-gray-900'>
            Home
          </Link>
          <Link href='/news' className='text-main px-2 text-center text-lg hover:text-gray-900'>
            News
          </Link>
          <Link href='/works' className='text-main px-2 text-center text-lg hover:text-gray-900'>
            Works
          </Link>
          <Link href='/contact' className='text-main px-2 text-center text-lg hover:text-gray-900'>
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
            <Link href='/' className='text-main block hover:text-gray-900'>
              Home
            </Link>
            <Link href='/news' className='text-main block hover:text-gray-900'>
              News
            </Link>
            <Link href='/works' className='text-main block hover:text-gray-900'>
              Works
            </Link>
            <Link href='/contact' className='text-main block hover:text-gray-900'>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
