import React, { useState } from 'react'

const PasswordChecker = () => {
    const [password, setPassword] = useState('')

    const handleInputChange = (e) => {
        setPassword(e.target.value)
    }

    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

    return (
        <section className='my-8'>
            <h2 className='text-3xl font-semibold'>🔑 Password Strength Checker</h2>
            <p className='mt-4'>Analyze the password's strength based on various criteria like length, character types (uppercase, lowercase, numbers, special characters), and presence of dictionary words. The strength analysis should be visually communicated to the user through a progress bar, color indicators, or descriptive messages.</p>
            <label className='mt-4 font-semibold'>Provide a strong password: </label>
            <input type='password' className='ml-2 border-2 border-royal-blue mt-4' onChange={handleInputChange} />
            <ul className='mt-2 list-inside list-disc'>
                <li className={`${password.length < 8 ? "text-red-600" : "text-green-600"}`}>Minimum 8 characters</li>
                <li className={`${password.toLowerCase() === password ? 'text-red-600' : 'text-green-600'}`}>At least one uppercase</li>
                <li className={`${password.toUpperCase() === password ? 'text-red-600' : 'text-green-600'}`}>At least one lowercase</li>
                <li className={`${/\d/.test(password) ? 'text-green-600' : 'text-red-600'}`}>At least one number</li>
                <li className={`${specialCharRegex.test(password) ? 'text-green-600' : 'text-red-600'}`}>At least one special character</li>
            </ul>
        </section>
    )
}

export default PasswordChecker