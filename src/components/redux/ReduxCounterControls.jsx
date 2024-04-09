import React, { useRef } from 'react';
import { useDispatch } from 'react-redux'

const ReduxCounterControls = () => {
    const dispatch = useDispatch()
    const numberToAdd = useRef();
    const numberToSubstract = useRef();

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" })
    }

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" })
    }

    const handleAddition = () => {
        dispatch({ type: "ADDITION", payload: Number(numberToAdd.current.value) })
        numberToAdd.current.value = '';
    }

    const handleSubstraction = () => {
        dispatch({ type: "SUBSTRACTION", payload: Number(numberToSubstract.current.value) })
        numberToSubstract.current.value = '';
    }

    const handlePrivacyToggle = () => {
        dispatch({ type: "PRIVACY_TOGGLE" })
    }

    return (
        <>
            <div className='flex gap-4 mt-3'>
                <button className='bg-my-green py-1 px-2 rounded' onClick={handleIncrement}>Increment</button>
                <button className='bg-my-yellow py-1 px-2 rounded' onClick={handleDecrement}>Decrement</button>
            </div>

            <div className='flex gap-4 mt-3'>
                <input type='number' placeholder='Enter a number' ref={numberToAdd} className='rounded border-2 border-slate-400 px-2' />
                <button className='bg-my-blue py-1 px-2 rounded' onClick={handleAddition}>Add</button>
            </div>

            <div className='flex gap-4 mt-3'>
                <input type='number' placeholder='Enter a number' ref={numberToSubstract} className='rounded border-2 border-slate-400 px-2' />
                <button className='bg-my-red py-1 px-2 rounded' onClick={handleSubstraction}>Sub</button>
            </div>

            <button className='bg-my-purple text-white py-1 px-2 rounded mt-6' onClick={handlePrivacyToggle}>Privacy Toggle</button>
        </>
    )
}

export default ReduxCounterControls