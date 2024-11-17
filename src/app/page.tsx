'use client';

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

// 画像切り替えコンポーネント
function SelectImage() {
  const gameImages = [
    '/feature-deepsea.png',
    '/feature-kanjishot.png',
    '/feature-mushroom.png',
    '/feature-yojijukugo.png',
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 前の画像に切り替える関数
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? gameImages.length - 1 : prevIndex - 1));
  };

  // 次の画像に切り替える関数
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === gameImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='relative'>
      <Image src={gameImages[currentIndex]} alt='feature-game' width={1000} height={1000} />
      <button
        onClick={handlePrev}
        className='absolute left-0 top-1/2 h-[3rem] w-[2rem] -translate-y-1/2 rounded-r bg-white'
      >
        ◀︎
      </button>
      <button
        onClick={handleNext}
        className='absolute right-0 top-1/2 h-[3rem] w-[2rem] -translate-y-1/2 rounded-l bg-white'
      >
        ▶︎
      </button>
    </div>
  );
}

// ホームコンポーネント
export default function Home() {
  return (
    <main className='grid-rows-home grid justify-items-center bg-gray-100 text-gray-900'>
      <div className='row-span-1'>
        <SelectImage />
      </div>
      <div className='row-span-2 pt-16'>
        <h1 className='px-4 text-left text-3xl font-bold'>NEWS</h1>
        <p className='px-4 text-lg'>
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテスト
        </p>
      </div>
      <div className='row-span-3 pt-16'>
        <h1 className='px-4 text-left text-3xl font-bold'>WORKS</h1>
        <p className='px-4 text-lg'>
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテスト
        </p>
      </div>
      <div className='row-span-4 py-16'>
        <h1 className='px-4 text-left text-3xl font-bold'>PROFILE</h1>
        <p className='px-4 text-lg'>
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテスト
        </p>
      </div>
    </main>
  );
}
