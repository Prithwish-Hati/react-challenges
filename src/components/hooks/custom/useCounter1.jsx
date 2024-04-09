import { useEffect } from "react"
import { useState } from "react"

export const useCounter1 = (initialCount, steps) => {
    const [counter, setCounter] = useState(initialCount)

    useEffect(() => {
        const intId = setInterval(() => {
            setCounter(prev => prev + steps)
        }, 1000)

        return () => clearInterval(intId)
    }, [steps])

    return counter;
}