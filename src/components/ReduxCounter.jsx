import React from 'react'
import { useSelector } from 'react-redux'
import ReduxCounterControls from './ReduxCounterControls'

const ReduxCounter = () => {
    // This takes care of subscription
    const counter = useSelector(state => state.counter)
    const privacy = useSelector(state => state.isPrivacy)

    return (
        <section className='my-8 w-full flex flex-col items-center border-2 border-my-purple py-10'>
            <h2 className='text-3xl font-semibold'>Redux Counter</h2>
            <p className='text-xl mt-4'>Current Value: {privacy ? counter : "Private"}</p>
            <ReduxCounterControls />
        </section>
    )
}

export default ReduxCounter