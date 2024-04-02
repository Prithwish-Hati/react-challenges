import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { BgColorContext } from '../../../store/BgColorContext';

const UseContextHook = () => {
    const [bgColor, setBgColor] = useState()
    const [borderColor, setBorderColor] = useState()

    const handleWithoutContextClick = () => {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const randomColor = `rgb(${r},${g},${b})`
        setBorderColor(randomColor)
    }

    const handleContextClick = () => {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const randomColor = `rgb(${r},${g},${b})`
        setBgColor(randomColor)
    }

    // const bgColorConx = BgColorContext

    return (
        <section className='my-8 w-full pb-10 border-b-2 border-my-purple'>
            <hgroup>
                <h2 className='text-3xl font-semibold'>💁🏽‍♂️useContext() Hook Usecase</h2>
                <p className='mt-4'>To access the value of Context API or React Context.</p>
                <p>Why do we need Context API?</p>
                <ol className='list-decimal list-inside'>
                    <li>Global state management</li>
                    <li>To prevent prop drilling (where you pass props through intermediate components that don't need them)</li>
                    <li>Context API enables reusable components to consume shared data without being tightly coupled to specific data sources, promoting component composition.</li>
                    <li>To seperate logic and UI in react apps</li>
                </ol>
            </hgroup>

            {/* Without useContext */}
            <div className='mt-6'>
                <h3 className='text-xl font-medium'>Without useContext</h3>
                <h4 className='font-medium text-lg'>Parent Component</h4>
                <button className='font-normal border-2 border-my-blue rounded-md px-3 my-2'
                    onClick={handleWithoutContextClick}
                >
                    Click me
                </button>
                <div className='flex flex-col gap-3'>
                    <Child1 borderColor={borderColor} />
                    <Child2 borderColor={borderColor} />
                </div>
            </div>

            {/* With useContext */}
            <BgColorContext.Provider value={bgColor}>
                <div className='mt-6'>
                    <h3 className='text-xl font-medium'>With useContext</h3>
                    <h4 className='font-medium text-lg'>Parent Component</h4>
                    <button className='font-normal border-2 border-my-blue rounded-md px-3 my-2'
                        onClick={handleContextClick}
                    >
                        Click me
                    </button>
                    <div className='flex flex-col gap-3'>
                        <Child1 />
                        <Child2 />
                    </div>
                </div>
            </BgColorContext.Provider>
        </section>
    )
}

export default UseContextHook