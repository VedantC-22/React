import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const {userid} = useParams()
    
    return (
        <>
        <h3 className="text-center bg-gray-700 w-full text-white">User: {userid}</h3>
        </>
    );
}2

export default User