import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {

    let navigate = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    navigate('/');
                }}
                className='border-2 bg-green-700 p-3 rounded-2xl mt-3 border-none font-semibold mr-2 ' >Return to Home</button>
            <button
                onClick={() => {
                    navigate(-1);
                }}
                className='border-2 bg-green-700 px-4 py-3 rounded-2xl mt-3 border-none font-semibold ' >Back</button>
        </div>
    )
}

export default Navbar2
