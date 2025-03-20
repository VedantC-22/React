import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)

    if (user) return(
        <>
            <h1 className="text-center mt-5">Welcome {user.username}</h1>
        </>
    )

    return <div className="text-center">Please Login...</div>
}

export default Profile