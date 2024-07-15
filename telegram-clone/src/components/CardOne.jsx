// CardOne.js

import React from 'react';

function CardOne({ senderName, message, timestamp, onClick }) {
  return (
    
    <div className='bg-slate-700 text-white border-b-2  border-slate-800 ' onClick={onClick}>
      <div className='border-box sm:min-h-min sm:w-screen bg-slate-700  flex items-center '>
        <img className='h-10 w-10 rounded-full bg-slate-400 m-3' src="" alt="" />
        <div className='pl-1'>
          <h1 className='font-bold'>{senderName}</h1>
          <h1>
        
            
            </h1>
        </div>
        <div className='pl-36'>
          <h1>{new Date(timestamp).toLocaleTimeString()}</h1>
          <h1 className=''>+{message}</h1>
        </div>
      </div>
    </div>
  );
}

export default CardOne;
