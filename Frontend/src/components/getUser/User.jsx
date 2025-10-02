import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./user.css"
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/getAll")
                // console.log(response.data)
                setUsers(response.data.data)

            }
            catch(error){
                console.log(error.message)

            }
        }
        fetchData()
    }, [])
    const deleteUser = (userId)=>{
        axios.delete(`/api/deleteUser/${userId}`)
        .then((response)=>{
             setUsers((prevUser)=>prevUser.filter((user)=> user._id !== userId))
            toast.success(response.data.message,{position:"top-right"})
        })

        .catch(error => console.log(error))
        }
    return (
        <div className='userTable'>
            <Link to={"/add"} className='addButton'>Add User</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.fname} {user.lname}</td>
                                    <td>{user.email}</td>

                                    <td className='actionButton'>
                                        <button onClick={()=>deleteUser(user._id)}>
                                            <FontAwesomeIcon icon={faTrash} /></button>
                                        <Link to={`/edit/${user._id}`}><FontAwesomeIcon icon={faPenToSquare} /></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default User
