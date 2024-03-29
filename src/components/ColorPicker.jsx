import React, { useRef, useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState('#000000')
    const colorInput = useRef()

    const handleInputChange = () => {
        setColor(colorInput.current.value)
    }
    return (
        <section className='my-8'>
            <h2 className='text-3xl font-semibold'>🎡 Color Picker with Hex Code Display</h2>
            <p className='mt-4'>
                Develop a React application that features a color picker component. Users should be able to select a color from the picker, and the corresponding hexadecimal (hex) code of the chosen color should be displayed prominently on the screen.
            </p>
            <div className='mt-4 flex gap-4 border-2 border-royal-blue p-2 w-fit'>
                <label>
                    Pick a Color:
                </label>
                <input type='color' ref={colorInput} onChange={handleInputChange} />
                <p>{color}</p>
            </div>
        </section>
    )
}

export default ColorPicker