import { useState } from 'react';
import '../Register/style.css';
const Signup =()=> {
    const[username,setUsername] = useState('');
    const handleSubmit = ()=>{
        console.log(username);
    }
    return(
        <div className="main-contain2">
        <form onSubmit={handleSubmit}>
        <input type="text" value={username} placeholder="Enter your User Name" onChange={(e)=>setUsername(e.target.value)}/> <br />
        <input type="text" placeholder="Enter your Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <input type="password" placeholder="Confirm Password" /> <br />
        <button>Sign Up</button> <br />
        </form>
    </div>
    );
}

export default Signup;