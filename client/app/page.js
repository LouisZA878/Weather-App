'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

import styles from "./page.module.css";



export default function Home() {
  const [city, setCity] = useState('London')

  const getCity = async () => {
    await axios.post(`http://localhost:3001/api/weather/${city}`)
      .then(res => console.log(res.data))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    getCity();
  }


  return (
   <form onSubmit={handleSubmit}>
      <input type='text' onChange={e => setCity(e.target.value)}/>
      <button type='submit'>Submit</button>
   </form>
  );
}
