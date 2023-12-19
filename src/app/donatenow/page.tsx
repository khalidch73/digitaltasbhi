import { title } from 'process';
import React from 'react';
import Link from 'next/link';
interface PaymentCardProps {
  name: string;
  cardNumber: string;
  title : string;
  expiryDate: string;
  backgroundColor: string;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  name,
  cardNumber,
  title,
  expiryDate,
  backgroundColor,
}) => {
  return (
  <div className='lg
  :p-40 p-10'>
    <div className="payment-card">
      <div className="card-header" style={{ backgroundColor }}>
        <h2>{name}</h2>
      </div>
      <div className="card-body">
        <div className="payment-method">
          <span className="method-name">{name}</span>
        </div>
        <div className="card-number">
          <span>Card Number:</span> {cardNumber}
        </div>
        <div className='card-title'>
        <span>Title:</span> {title}
        </div>
        <div className="expiry-date">
          Expiry Date: {expiryDate}
        </div>
      </div>
    </div>
  </div>
  );
};

const PaymentPage: React.FC = () => {
  return (
    <div className='bg-gray-800 w-full h-auto lg:w-full lg:h-screen'>
      <h2 className='text-center text-4xl font-bold text-slate-100'>Payment Options</h2>
    <div className="text-sm lg:text-lg text-slate-100 grid grid-cols-1 lg:grid lg:grid-cols-3 rounded-xl">
      {/* Jazzcash Payment Card */}
      <PaymentCard
        name="Jazzcash"
        cardNumber="03094305213"
        title='Khalid Nawaz Ch'
        expiryDate="01/25"
        backgroundColor="#16a085"
      />

      {/* Easypaisa Payment Card */}
      <PaymentCard
        name="Easypaisa"
        cardNumber="03476486340"
        title='Khalid Nawaz Ch'
        expiryDate="08/25"
        backgroundColor="#f39c12"
      />

      {/* Bank Account Payment Card */}
      <PaymentCard
        name="Silk Bank"
        cardNumber="4848380119017436"
        title='Khalid Nawaz Ch'
        expiryDate="09/27"
        backgroundColor="#3498db"
      />
    </div>
    <span className='flex flex-row justify-center text-center '>
        <Link href = "/">
        <button className="bg-gradient-to-r from-red-900 to-yellow-300 p-4 rounded-full border transform transition-transform hover:scale-110">
          Go Back
        </button>
        </Link>
        </span>
    </div>
  );
};

export default PaymentPage;
