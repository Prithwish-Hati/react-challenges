import { useEffect, useState } from 'react'

// This is not jsx. It's a JS function. initialCount, step are arguements, not props
const useCounter = (initialCount, step) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prev => prev + step)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [step])

  return count;
}

export default useCounter