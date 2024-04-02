import React from 'react'
import GrandChildOf2 from './GrandChildOf2'

const Child2 = ({ borderColor }) => {
  return (
    <div className='bg-my-yellow'>
      Child2
      <div className='p-4'>
        <GrandChildOf2 borderColor={borderColor}/>
      </div>
    </div>
  )
}

export default Child2