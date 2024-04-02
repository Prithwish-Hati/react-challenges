import React, { useCallback, useEffect, useMemo, useState } from 'react'

const UseCallbackHook = () => {

    //Example 1: Memoisation
    const handleClick1 = useMemo(() => { return "hello" }, [])
    const handleClick2 = useCallback(() => { return "hello" }, [])
    
    console.log(handleClick1)  // returns value
    console.log(handleClick2) // returns the whole function
    
    // Example 2: Reference equality
    const [items, setItems] = useState([]);
    const handleLoad = inc => setItems(inc)
    return (
        <div>
            <Child onBtnClick = {handleLoad} />
        </div>
    )
}

export default UseCallbackHook

const Child = ({ onBtnClick }) => {
    useEffect(() => {
        
    }, [onBtnClick])
}