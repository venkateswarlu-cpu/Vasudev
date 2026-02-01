import { useState } from "react";

export default function UserForm() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (form.password.length < 6) e.password = "Min 6 chars";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = e => {
    e.preventDefault();
    if (validate()) alert("Form Submitted!");
  };

  return (
    <form onSubmit={submit} className="p-4 border">
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      {errors.name}

      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      {errors.email}

      <input type={show?"text":"password"}
        placeholder="Password"
        onChange={e=>setForm({...form,password:e.target.value})}/>
      {errors.password}

      <button type="button" onClick={()=>setShow(!show)}>Show</button>
      <button>Submit</button>
    </form>
  );
}
