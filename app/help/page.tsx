import React from 'react';

const Help = () => {
  return (
    <div className='min-h-screen bg-cover bg-center p-6 bg-[url(https://t4.ftcdn.net/jpg/08/72/90/57/360_F_872905722_9ztUUq3icg0GmGDzsqKOUFLuLkb97M2R.jpg)]' >
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Help Center</h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li className="text-lg text-gray-700">What is your return policy on shoes?</li>
        <li className="text-lg text-gray-700">How do I choose the right shoe size?</li>
        <li className="text-lg text-gray-700">What materials are used in your shoes?</li>
      </ul>
      <p className="text-gray-600">
        If you need further assistance, please reach out to our customer support team.
      </p>
    </div>
    </div> 
  );
};

export default Help;