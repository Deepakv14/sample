import {useState} from 'react';

function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function registerUser(e){
    e.preventDefault();
    const response= await fetch('http://localhost:3001/api/register',{
    method:"POST",  
    headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name,email,password})
    })
    const data= await response.json();
    console.log(data);
  }
    return <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter the name"/><br/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter the email"/><br/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter the password"/><br/>
        <input type="submit" value="Register"/>
      </form>
      </div>;
}

export default App;