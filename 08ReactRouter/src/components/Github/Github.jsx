
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    // const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch('https://api.github.com/users/VedantC-22')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // }, [])

    const data = useLoaderData()
    return(
        <>
            <div className="bg-black-700 flex items-center justify-center w-full py-10 px-20">
                <div className="flex flex-col items-center">
                    <img src={data['avatar_url']} alt="Github profile img" className="w-40 rounded-xl" />
                    <span>{data['login']}</span>
                    <span>Name: {data['name']}</span>
                    <span>Followers: {data['followers']}</span>
                    <span>Url: <a href={data['html_url']} target="_blank" rel="noopener noreferrer">see github profile</a></span>
                </div>
                
            </div>
        </>
    );
}

export default Github
export const githubInfoLoader = async () => {
     const resp = await fetch('https://api.github.com/users/VedantC-22')
     return resp.json()
}