
import React,{useState,useEffect} from 'react';
export default function EffectMessageCard(){
    const[count,setCount]=useSate(0);
    const[message,setMessage]=useState();
    useEffect(()=>{
        setMessage(`🔄Count has been updated to ${count}`);
    },[count]);
    return(
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
            <h2 className="text-xl font-semibold text--purple-700 mb-2">🔁useEffect Example</h2>
            <p className="text-4xl font-bold text-gray-800 mb-2">{count}</p>
            <p className="text-gray-600 italic mb-4">{message}</p>
            <button 
            onClick={()=>setCount(count+1)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl">
                Click Me
            </button>
        </div>
    );
}