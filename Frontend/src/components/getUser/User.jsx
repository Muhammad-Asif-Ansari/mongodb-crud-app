import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./user.css"
const User = () => {
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
                    <tr>
                        <td>1.</td>
                        <td>Asif</td>
                        <td>asif@gmail.com</td>

                        <td className='actionButton'>
                            <button>
                                <FontAwesomeIcon icon={faTrash} /></button>
                            <Link to={'/edit'}><FontAwesomeIcon icon={faPenToSquare} /></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User
