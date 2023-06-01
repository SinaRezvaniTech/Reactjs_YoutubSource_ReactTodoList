import React, { useState, useContext } from 'react'
import Cards from './Cards'

//components
import Form from './Form'

//css
import './Home.css'

//context
import { context } from '../context/Context'

const Home = () => {
  const { createMode } = useContext(context)

  return (
    <div className='w-screen h-screen'>
      {/* Bg */}
      <div
        className={`w-screen h-screen bg ease-in-out duration-700  fixed ${
          createMode ? 'bg-top' : 'bg-center'
        }`}
      ></div>
      <div className='relative mx-auto flex flex-col items-center justify-between gap-10'>
        {/* Form */}
        <Form
          className={`${
            createMode ? '' : 'translate-y-[-18rem] md:translate-y-[-14rem]'
          } ease-in-out duration-500`}
        />
        {/* Cards */}
        <Cards
          className={`${
            createMode
              ? ' opacity-0 translate-y-[20rem]'
              : 'translate-y-[-14rem] opacity-100'
          } ease-in-out duration-500`}
        />
      </div>
    </div>
  )
}

export default Home
