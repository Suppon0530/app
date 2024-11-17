import React from 'react';

// フッターコンポーネント
export default function Footer() {
  return (
    <footer className='grid-rows-1 bg-gray-800 py-6 text-white'>
      <div className='text-center'>
        <p className='text-base'>
          &copy; {new Date().getFullYear()} Suppon Game. All rights reserved.
        </p>
        <div className='pt-4'>
          <a
            href='https://github.com/Suppon0530'
            className='text-gray-400 hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>{' '}
          |{' '}
          <a
            href='https://twitter.com/Suppon0530'
            className='text-gray-400 hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
