export default function FilterControls({ setFilter }) {
  return (
    <div className="flex gap-2 mt-2">
      {["all","active","completed"].map(f =>
        <button key={f} onClick={() => setFilter(f)} className="border px-2">{f}</button>
      )}
    </div>
  );
}
