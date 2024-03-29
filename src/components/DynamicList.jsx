import React, { useRef, useState } from 'react'

const DynamicList = () => {
    const [listItems, setListItems] = useState([])
    const myInput = useRef()
    const listItem = useRef()


    const handleAdd = () => {
        const newListItem = myInput.current.value;
        setListItems([...listItems, newListItem])
        myInput.current.value = ""
    }

    const handleClear = () => {setListItems([])}

    const handleStrike = () => listItem.current.style.textDecorationLine = 'line-through'
    

    return (
        <section className='my-8'>
            <h2 className='text-3xl font-semibold'>📝 Dynamic List of Items with Strikethrough</h2>
            <p>Build a React application that displays a dynamic list of items. Each item should have its own text and the ability to be crossed out through a strike-through effect when clicked. Users should be able to add new items to the list and clear all existing items at once.</p>
            <input type='text' className='border-2 border-royal-blue mt-4 w-4/12' ref={myInput} />
            <button className='ml-4 border-2 border-royal-blue shadow-mini px-2' onClick={handleAdd}>Add</button>
            <button className='ml-4 border-2 border-royal-blue shadow-mini px-2' onClick={handleClear}>Clear</button>
            {listItems.length > 0 &&
                <ul className='mt-2 ml-5'>
                    {listItems.map((item, index) => (
                        <li key={index} className='list-disc hover:cursor-pointer' onClick={handleStrike} ref={listItem}>{item}</li>
                    ))}
                </ul>
            }
        </section>
    )
}

export default DynamicList