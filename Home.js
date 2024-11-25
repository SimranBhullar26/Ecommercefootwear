import React from 'react'
import '../Styles/Home.css'
import { Navbar } from '../Components/Navbar'
import { Products } from '../Components/Products'

export const Home = () => {
    return (
        <div className='wrapper'>
            <Navbar/>
            <Products/>
            
            </div>
    )
}
