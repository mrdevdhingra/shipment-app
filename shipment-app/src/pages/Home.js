import React from 'react'
import Card from '../Components/Card'

function Home() {
  return (
    <div className='home'>
        
        <div className='home-sub'>
        <Card/>
        <Card/>
        </div>
        <div className='home-sub'>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}

export default Home