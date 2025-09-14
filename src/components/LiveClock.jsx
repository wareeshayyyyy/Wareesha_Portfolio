/* import React, { useEffect, useState } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center mt-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">🕒 Live Clock</h2>
      <p className="text-3xl font-mono text-gray-800">{formatTime(time)}</p>
    </div>
  );
} */

import React,{useEffect,useState}from 'react';
export default function LiveClock(){
  const[time,setTime]=useState(new Date());
  useEffect(()=>{
    const interval=setInterval(() => {
      setTime(new Date());
      
    }, 1000);
    return()=>clearInterval(interval); 

  },[]); 
  const formatTime=(date)=>{
    return date.toLocateTimeString();
  };
  return(
    <div classNmae="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center mt-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">🕒Live Clock</h2>
      <p className="text-3xl font-mono text-gray-800">{formatTime(time)}</p>
    </div>
  );

  }
  
