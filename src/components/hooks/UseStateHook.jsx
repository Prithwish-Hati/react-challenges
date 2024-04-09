import React, { useState } from 'react'

const UseStateHook = () => {
  const [number, setNumber] = useState(0)

  const handleIncrement = () => {
    setNumber(prev => prev + 1)
  }

  const handleDecrement = () => {
    setNumber(prev => prev - 1)
  }


  return (
    <section className='my-8'>
      <h2 className='text-3xl font-semibold'>🗃️ useState Hook</h2>
      <p className='mt-4'>
        To manage local state in react functional components
      </p>

      <div className='mt-4 flex gap-4 text-2xl'>
        <button onClick={handleDecrement}>-</button>
        {number}
        <button onClick={handleIncrement}>+</button>
      </div>
    </section>
  )
}

export default UseStateHook