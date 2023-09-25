import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [data, setData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: ""
    });

    let changeValue =(e)=>{
        if (e.target.type === "checkbox") {
            setData({...data,[e.target.name]: e.target.checked});
        }else{
            setData({...data,[e.target.name]:e.target.value});
        }
    }

    let navi = useNavigate();

    let submitValue =(e)=>{
     e.preventDefault();
     axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",data)
     .then(y => console.log(y.data))
     .then(navi("/login"))
     .catch(e => console.log(e + "In register"));
    }

    return <form className='container mt-5' onSubmit={submitValue}>
        <h1 className='mb-3'>Registration Page:</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" name='title' onChange={changeValue} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="text" class="form-control" name='firstName' onChange={changeValue} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Last Name</label>
    <input type="text" class="form-control" name='lastName' onChange={changeValue} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" name='email' onChange={changeValue} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="password" class="form-control" name='password' onChange={changeValue} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" name='confirmPassword' onChange={changeValue} />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" name='acceptTerms' onClick={changeValue} />
    <label class="form-check-label" >Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
    </form>
}


export default Registration;