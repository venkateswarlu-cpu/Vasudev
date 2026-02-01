import { useState } from "react";

const names = ["Alice","Bob","Charlie","David"];

export default function SearchList() {
  const [q,setQ] = useState("");

  const filtered = names.filter(n=>n.toLowerCase().includes(q.toLowerCase()));

  const highlight = (text) =>
    text.split(new RegExp(`(${q})`,"gi")).map((p,i)=>
      p.toLowerCase()===q.toLowerCase() ? <b key={i}>{p}</b> : p
    );

  return (
    <div className="p-4 border">
      <input onChange={e=>setQ(e.target.value)} placeholder="Search"/>
      <p>Results: {filtered.length}</p>
      {filtered.map(n=><div key={n}>{highlight(n)}</div>)}
    </div>
  );
}
