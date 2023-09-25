import axios from 'axios';
import React, {  useState } from 'react';
import Accounts from './Accounts';
import AuthFetch from './AuthFetch';

const Login = () => {
const [data, setData] = useState({
    email: "",
  password: ""
});


let updateValue =(e)=>{
   setData({...data,[e.target.name]: e.target.value});
   console.log(data);
}

let submitValue =(e)=>{
    e.preventDefault();
    axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data)
    .then(y => y.data)
    .then(y =>  localStorage.setItem("ApiToken", y.jwtToken))
    .catch((v)=> console.log("Error in fetching" + v));
}

    return <div> 
    <form className='container mt-5' onSubmit={submitValue}>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name='email' onChange={updateValue}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={updateValue}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
    </form>;
    <Accounts/>
    </div>
}


export default Login;