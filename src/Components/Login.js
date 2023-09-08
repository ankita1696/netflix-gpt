import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true)

    const toggleSignInForm =() => {
        setisSignInForm(!isSignInForm);
}
  return (
    <div><Header></Header>
    <div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    alt="logo"/></div>
    <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign In" : "Sign Up"} </h1>
        {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-600'/>)}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600'/>
        <input type="text" placeholder='Password' className='p-4 my-4 w-full bg-gray-600'/>
        <button className="p-2 my-6 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign In Now" : "Already Registered Sign Up"}</p>
    </form>
    </div>
    
  )
}

export default Login