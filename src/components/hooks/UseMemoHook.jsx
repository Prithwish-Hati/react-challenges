import React, { useEffect, useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            setNumber(prev => prev + i)
        }
    }, [])

    

    // useMemo(() => {
    //     for (let i = 0; i < 100000; i++) {
    //         number + i
    //     }
    // }, [number]
    // )

    return (
        <div>UseMemoHook
            <p>{number}</p>
            <button></button>
        </div>
    )
}

export default UseMemoHook