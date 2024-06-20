'use client'
import axios, { getAdapter } from 'axios';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [user, setuser] = useState([])
  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    const data = res.data
    console.log(data);
    setuser(data)
  }
  useEffect(() => {
    getData()
  },[])
  return(
    <>
      <button id='btn' onClick={getData}>click here</button>
      <div id="container">
      {user.map((e) => (
        <div key={e.id} className="userinfo">
          <a href={`/${e.id}`}>{e.username}</a>
        </div>
      ))}
    </div>

     
    </>
  )
}

export default page