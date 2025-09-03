import React, { useState } from 'react'
import "../addUser/Add.css"
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
const Edit = () => {
  const users = {
    fname: "",
    lname: "",
    email: ""
  }

  const { id } = useParams();
  const navigate = useNavigate()
  const [user, setUser] = useState(users)

  const inputChange = (e) => {
    const { name, value } = e.target
    setUser({...user, [name]: value })
    console.log(user)
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/api/getuser/${id}`)
      .then(response => setUser(response.data)
      )
      .catch(error => console.log(error));

  }, [id])

  const submitForm = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:5000/api/updateuser/${id}`, user)
      .then(response => toast.success(response.data.message, { position: "top-right" }))
    // .then(response => console.log(response.data.message))
    navigate("/")
      .catch(err => console.log(err))
  }

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Update User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">
            First Name
          </label>
          <input type="text" id='fname' value={user.fname} name='fname' autoComplete='off' onChange={inputChange} placeholder='First Name' />
        </div>

        <div className="inputGroup">
          <label htmlFor="lname">
            Last Name
          </label>
          <input type="text" id='lname' value={user.lname} name='lname' autoComplete='off' onChange={inputChange} placeholder='Last Name' />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">
            Email
          </label>
          <input type="email" id='email' value={user.email} name='email' autoComplete='off' onChange={inputChange} placeholder='Email' />
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
