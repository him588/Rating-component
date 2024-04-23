import React, { useState } from 'react'
import ThumbIcon from '../icons/thumbicon'

function Intrest() {
    const [yes,setyes]=useState(false)
    const [no,setno]=useState(false)
  return (
    <div className=' flex gap-7 font-[Merriweather]'>
        <div className=' flex gap-3 cursor-pointer' onClick={()=>{setno(true),setyes(false)}}>
            <div className=' rotate-180'>
                <ThumbIcon h={30} w={30} c={no?"red":'#a6a3b1'}/>
            </div>
            <p className={`${no?"red":"#a6a3b1"}`}>No</p>
        </div>
        <div className=' flex gap-3 cursor-pointer'onClick={()=>{setno(false),setyes(true)}}>
            <div className=''>
                <ThumbIcon h={30} w={30} c={yes?"green":'#a6a3b1'}/>
            </div>
            <p className={`${yes?"green":"#a6a3b1"}`}>No</p>
        </div>
      
    </div>
  )
}

export default Intrest
