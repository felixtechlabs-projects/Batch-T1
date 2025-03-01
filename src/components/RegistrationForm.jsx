import React, { useState } from 'react'

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name == "") {
            alert("Enter valid name");
            return;
        }
        if(contact == "") {
            alert("Enter valid contact");
            return;
        }
        if(email == "") {
            alert("Enter valid email");
            return;
        }
        if(password == "") {
            alert("Enter valid password");
            return;
        }
        if(confirmPassword == "") {
            alert("Enter valid confirmPassword");
            return;
        }

        if(password !== confirmPassword) {
            alert("Password should match");
            return;
        }

        alert("Form submitted");
        setName('');
        setConfirmPassword('');
        setContact('');
        setEmail('');
        setPassword('');
    }

  return (
    <>
        <h3 className='text-2xl text-blue-900'> Registration Form </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor=""> Enter Your name: </label>
            <input 
            className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
            type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />

            <label htmlFor=""> Enter Your Email: </label>
            <input 
            className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br /> <br />

            <label htmlFor=""> Enter contact Number: </label>
            <input 
            className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="tel" value={contact} onChange={(e) => setContact(e.target.value)} /> <br /> <br />

            <label htmlFor=""> Enter Your Password: </label>
            <input 
            className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />

            <label htmlFor=""> Confirm Password: </label>
            <input
            className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> <br /> <br />

            <button 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            type='submit'> Submit </button>
        </form>
    </>

  )
}

export default RegistrationForm