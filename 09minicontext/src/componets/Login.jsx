import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";


function Login(){
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=> {
        e.preventDefault()
        setUser({username, pass})
    }
    return(
        <>
            <div className="w-screen flex flex-col justify-center items-center">
                <h2>Login</h2>
                <div className="flex flex-col gap-5 mt-4">
                    <input
                     type="text" 
                    name="username" 
                    placeholder="username" 
                    id="name" 
                    value={username}
                    onChange={(e => setUsername(e.target.value.trim()))}
                    className="outline-none rounded-xl border-none bg-gray-100 px-3 py-2" />
                    <input 
                    type="password" 
                    name="userpass" 
                    id="pass" 
                    value={pass}
                    placeholder="password" 
                    onChange={e => setPass(e.target.value.trim())}
                    className="outline-none rounded-xl border-none bg-gray-100 px-3 py-2" />
                    <button
                    className="bg-blue-300 px-3 py-2"
                    onClick={handleSubmit}
                    >Submit</button>

                </div>
            </div>
        </>
    )
}

export default Login;