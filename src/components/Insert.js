import React, { useState } from 'react'
import '../css/insert.css'
import User from './User'
export default function Insert() {
    const [user, setUser] = useState();
    const [users, setUsers] = useState([]);
    const adduser = (event) => {
        setUser(event.target.value);
    }
    const addusers = () => {
        setUsers((oldUser)=>{
            return [...oldUser,user]
        })
        setUser("");
    }
    return (
        <>
                <div className='form-box'>
                    <div className="row mb-3">
                        <h1>Enter Name</h1>
                    </div>
                    <div className='row '>
                        <div className='col-md d-flex justify-content-center align-items-center flex-column'>
                            <input type="text" className="form-control" id="exampleInputEmail1" value={user} onChange={adduser} aria-describedby="emailHelp" />
                        </div>
                        <div className='col-md d-flex justify-content-center align-items-center'>
                            <button type="" className="btn btn-primary" onClick={addusers}>Submit</button>
                        </div>
                    </div>
                </div>
            {
                users.map((element)=>{
                    return <User user={element}/>;
                })
            }
        </>
    )
}
