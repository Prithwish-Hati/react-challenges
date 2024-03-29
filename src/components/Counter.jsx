import React, { useState } from 'react'
import { CirclePlus, CircleMinus } from 'lucide-react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount((prev) => prev - 1)
    }

    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <section className='my-8'>
            <h2 className='text-3xl font-semibold'>🧮 Simple Counter</h2>
            <p className='mt-4'>Develop a React application that displays a counter with two buttons: one labeled "Increment" and one labeled "Decrement." Clicking the "Increment" button should increase the counter's value by 1, while clicking the "Decrement" button should decrease it by 1. The current counter value should be displayed clearly on the screen.</p>
            <div className='mt-6 flex'>
                <button onClick={handleDecrement} className='border-2 border-royal-blue p-2'>
                    <CircleMinus />
                </button>
                <span className='text-3xl border-y-2 border-royal-blue px-2 font-normal'>{count}</span>
                <button onClick={handleIncrement} className='border-2 border-royal-blue p-2'>
                    <CirclePlus />
                </button>
            </div>

        </section>
    )
}

export default Counter
