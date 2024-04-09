import React from 'react'
import { useSelector } from 'react-redux'
import RToolkitCounterControls from './RToolkitCounterControls'

const RToolkitCounter = () => {
    // This takes care of subscription
    const counter = useSelector(state => state.counter)
    const privacy = useSelector(state => state.isPrivacy)

    return (
        <section className='my-8 w-full flex flex-col items-center border-2 border-my-purple py-10'>
            <h2 className='text-3xl font-semibold'>Redux Toolkit Counter</h2>
            <p className='text-xl mt-4'>Current Value: {privacy ? counter : "Private"}</p>
            <RToolkitCounterControls />
        </section>
    )
}

export default RToolkitCounter;