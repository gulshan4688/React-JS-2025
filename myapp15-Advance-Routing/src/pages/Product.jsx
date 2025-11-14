import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <div className=' flex flex-row items-center justify-center gap-11 text-2xl '>
                <Link to="/product/men" >Mens </Link>
                <Link to="/product/women" >Womens </Link>
                <Link to="/product/kids" >Kids </Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Product
