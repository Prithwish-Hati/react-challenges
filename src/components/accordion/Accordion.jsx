import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react';
import { data } from 'autoprefixer';

const accordions = [
    {
        id: 1,
        name: 'Step 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh. Condimentum vitae sapien pellentesque habitant. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Lacus sed turpis tincidunt id aliquet risus. Tellus id interdum velit laoreet id donec ultrices.',
        isVisible: false,
    },
    {
        id: 2,
        name: 'Step 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh. Condimentum vitae sapien pellentesque habitant. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Lacus sed turpis tincidunt id aliquet risus. Tellus id interdum velit laoreet id donec ultrices.',
        isVisible: false,
    },
    {
        id: 3,
        name: 'Step 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh. Condimentum vitae sapien pellentesque habitant. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Lacus sed turpis tincidunt id aliquet risus. Tellus id interdum velit laoreet id donec ultrices.',
        isVisible: true,
    },
]

const Accordion = () => {
    // const [isOpened, setIsopened] = useState(false)
    const [data, setData] = useState(accordions)

    const handleToggle = (item) => {
        setData(prev => {
           let newArr = prev.filter((i) => { return i.id !== item.id}) // items we are not clicking
           item.isVisible = !item.isVisible // changing the visibility of the item we are clicking
           newArr.push(item) 
           return newArr
        })
        
    }
    return (
        <section className='w-full'>
            <h1 className='text-2xl my-4 text-center'>Accordion</h1>

            {data.map(item => (
                <>
                    <div className='w-[100%] flex justify-between border-2 border-black cursor-pointer text-xl font-semibold p-2' onClick={() => handleToggle(item)} key={item.id}>
                        <h4>{item.name}</h4>
                        <ChevronDown />
                    </div>
                    {item.isVisible &&<p>{item.text}</p>}
                </>
            ))}

            {/* <div className='w-[100%] flex justify-between border-2 border-black cursor-pointer text-xl font-semibold p-2' onClick={handleToggle}>
                <h4 className='' >Step 1</h4>
            </div>
            {isOpened &&
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh. Condimentum vitae sapien pellentesque habitant. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Lacus sed turpis tincidunt id aliquet risus. Tellus id interdum velit laoreet id donec ultrices.</p>
            } */}

        </section>
    )
}

export default Accordion