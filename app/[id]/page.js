'use client'
import axios, { getAdapter } from 'axios';
import React, { useEffect, useState } from 'react';

const Page = ({params}) => {
    const [user, setuser] = useState("")
    const {id} = params
    const getData = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        const data = res.data
        setuser(data)
        console.log(user);
    }
    useEffect(() => {
    getData()
    },[])
    return(
        <>
        <div>
            <p>{user.name}</p>
        </div>
        </>
    )
}

export default Page