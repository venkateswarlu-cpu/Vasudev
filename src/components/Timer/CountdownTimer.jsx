import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(10000);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTime(t => Math.max(0, t-10)), 10);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div className="p-4 border">
      <h2>{(time/1000).toFixed(2)}</h2>
      <button onClick={()=>setRunning(true)}>Start</button>
      <button onClick={()=>setRunning(false)}>Pause</button>
    </div>
  );
}
