import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT': return { count: state.count + 1 }
        case 'DECREMENT': return { count: state.count - 1 }
    }
}

const UseReducerHook1 = () => {
    const initialState = { count: 0 }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <section className='my-8'>
            <h2 className='text-3xl font-semibold'>🗃️ useReducer Hook</h2>
            <p className='mt-4'>
                To manage complex state in react functional components, substitute of useStateHook
            </p>

            <div className='mt-4 flex gap-4 text-2xl'>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
                <span>{state.count}</span>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            </div>
        </section>
    )
}

export default UseReducerHook1