import React, { useState } from 'react'
import "../addUser/Add.css"
import { Link } from 'react-router-dom'
const Edit = () => {
  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update User</h3>
        <form className='addUserForm'> 
        <div className="inputGroup">
            <label htmlFor="fname">
            First Name
            </label>
            <input type="text" id='fname' name='fname' autoComplete='off' placeholder='First Name'/>
        </div>

           <div className="inputGroup">
            <label htmlFor="lname">
            Last Name
            </label>
            <input type="text" id='lname' name='lname' autoComplete='off' placeholder='Last Name'/>
        </div>

           <div className="inputGroup">
            <label htmlFor="email">
            Email
            </label>
            <input type="email" id='email' name='email' autoComplete='off' placeholder='Email'/>
        </div>

           <div className="inputGroup">
       <button type='submit'>
        UPDATE USER
       </button>
        </div>
        </form>
    </div>
  )
}

export default Edit
