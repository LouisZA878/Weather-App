'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Body from './components/Body';

export default function Home() {
  const [city, setCity] = useState('London')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getCity()
  }, [])
  const getCity = async () => {
    await axios.post(`http://localhost:3001/api/weather/${city}`)
      .then(res => setWeather(res.data))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(city)

    getCity();
  }


  return (
    <>
      {
      weather &&
      <div className='container'>
        <Sidebar />
        <Header
          handleChange={(e) => setCity(e.target.value)}
          handleSubmit={handleSubmit}
          
          />
        <Body />
      </div>
      }
    </>
  )
}
