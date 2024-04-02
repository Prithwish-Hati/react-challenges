import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import GrandChildOf2 from './GrandChildOf2'

const UseReducerHook = () => {
    return (
        <section className='my-8 w-full'>
            <hgroup>
                <h2 className='text-3xl font-semibold'>🧨useReducer() Hook Usecase</h2>
                <p className='mt-2'>Why do we need useReducer()?</p>
                <ol className='list-decimal list-inside'>
                    <li>Simplifies sharing state between components without prop drilling.</li>
                    <li>Facilitates global state management across the application.</li>
                    <li>Enhances code readability and maintainability by centralizing state management.</li>
                </ol>
            </hgroup>

            <div className='mt-4'>
                <h4>Parent Component</h4>
                <Child1 />
                <Child2 />
            </div>
        </section>
    )
}

export default UseReducerHook