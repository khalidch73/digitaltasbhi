// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" text-white py-4 fixed w-full bottom-0">
      <div className="flex justify-center items-center">
        <Link href="/donate">
          <div className="footer-logo">Pray for Orphan-<span className='text-yellow-600 font-bold'>Donate</span></div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
