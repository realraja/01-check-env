'use client';
import axios from 'axios';
import React, { useState } from 'react'

const HomeSection1 = () => {
    const [description, setDescription] = useState('Your one-stop solution for web development and design.');

    const checkEnv = async() =>{
        try {
            const data = await axios.get('/api/check');
            console.log(data.data);
            setDescription(data.data.message);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <section className="flex-grow bg-cover bg-center text-white" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}>
      <div className="bg-black bg-opacity-50 flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MyWebsite</h2>
        <p className="text-lg md:text-2xl mb-8 text-center">{description}</p>
        <button onClick={checkEnv} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
      </div>
    </section>
    </div>
  )
}

export default HomeSection1
