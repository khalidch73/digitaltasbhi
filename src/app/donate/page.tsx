import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Orphan01 from "@/app/images/orphan01.jpg"
import Orphan02 from "@/app/images/orphan02.jpg"
import Orphan03 from "@/app/images/orphan03.jpg"
import Orphan04 from "@/app/images/orphan04.jpg"
import Orphan05 from "@/app/images/orphan05.jpg"
import Orphan06 from "@/app/images/orphan06.jpg"
import Orphan07 from "@/app/images/orphan07.jpg"
import Orphan08 from "@/app/images/orphan08.jpg"

const DonationPage = () => {
  return (
    <div className="w-full h-auto md:h-screen">
    <div className="relative bg-gray-900 text-center md:p-8 md:text-lg font-semibold text-slate-50">
      <h1 className="md:text-4xl text-2xl font-bold md:mb-6 text-yellow-600">Support Orphaned Children</h1>
      <p className="text-lg mb-6">
        Every child deserves a loving home, a warm meal, and the chance to dream. In the heart of our charity, we stand together to make a difference in the lives of orphaned children who long for the warmth of family and the hope for a brighter future.
      </p>
      <p className="text-lg mb-6">
        Your donation can be the ray of hope that transforms their lives. With your generosity, we can provide shelter, education, and a nurturing environment where these children can heal and thrive.
      </p>
      <p className="text-lg mb-6">
        Join hands with us to create a better tomorrow for these innocent souls. Your contribution, no matter how big or small, will make a lasting impact on their journey towards happiness and fulfillment.
      </p>
      <p className="text-lg mb-8">
        Make a difference today. Your support is a lifeline for these children, reminding them that they are not alone, and that there is a world full of love and compassion waiting to embrace them.
      </p>
      <div className=" p-6 rounded-md text-white">
        <p className="text-2xl font-semibold mb-4 text-red-900">Donate Now and Be Their Hero</p>
        {/* Add your donation button or link here */}
        <span className='p-4'>
        <Link href = "/donatenow">
        <button className="bg-gradient-to-r from-red-900 to-yellow-300 p-4 rounded-full border transform transition-transform hover:scale-110">
          Donate
        </button>
        </Link>
        </span>
        <span>
        <Link href = "/">
        <button className="bg-gradient-to-r from-red-900 to-yellow-300 p-4 rounded-full border transform transition-transform hover:scale-110">
          Go Back
        </button>
        </Link>
        </span>
      </div>
      <p className="text-lg mt-4">
        Your contribution will make a lasting impact. Thank you for being a hero in the lives of these children.
      </p>
    </div>
    <p className='text-4xl font-bold mb-6 text-yellow-600 text-center'>They are Looking for your Help</p>
    <div className='grid grid-cols-4 gap-4 p-5'>
        <span>
        <Image
          src={Orphan02} 
          alt="Orphaned Children"
          className="rounded-md"
        />
        </span>
        <span>
        <Image
          src={Orphan05} 
          alt="Orphaned Children"
          className="rounded-md"
        />
        </span>
        <span>
        <Image
          src={Orphan04} 
          alt="Orphaned Children"
          className="rounded-md"
        
        />
        </span>
        <span>
        <Image
          src={Orphan06} 
          alt="Orphaned Children"
          className="rounded-md"
        />
        </span>
        <span>
        <Image
          src={Orphan07} 
          alt="Orphaned Children"
          className="rounded-md"
        />
        </span>
        <span>
        <Image
          src={Orphan08} 
          alt="Orphaned Children"
          className="rounded-md"
        />
        </span>
        <span>
        <Image
          src={Orphan03} 
          alt="Orphaned Children"
          className="rounded-md"
        />
        </span>
        <span>
        <Image
          src={Orphan01} 
          alt="Orphaned Children"
          className="rounded-md"
        />
        </span>
      </div>
</div>
  );
};

export default DonationPage;
