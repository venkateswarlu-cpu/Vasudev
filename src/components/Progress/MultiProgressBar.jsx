import { useState } from "react";

export default function MultiProgressBar() {
  const [values, setValues] = useState([20, 40, 60]);

  const avg = values.reduce((a,b)=>a+b,0)/values.length;

  return (
    <div className="p-4 border">
      {values.map((v,i)=>(
        <input key={i} type="range" value={v}
          onChange={e=>{
            const arr=[...values]; arr[i]=+e.target.value; setValues(arr);
          }} />
      ))}
      <div className="h-4 bg-gray-200 mt-2">
        <div style={{width:`${avg}%`}}
          className={avg<40?"bg-red-500":"bg-green-500"}> </div>
      </div>
    </div>
  );
}
