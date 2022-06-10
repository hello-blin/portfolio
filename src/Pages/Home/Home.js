import React from 'react'

//Import Styles from the same directory
import './Home.scss'
import About from '../../Components/About/About'

//Import Components
import Header from '../../Components/Header/Header'


function Home() {
    return (
        <>
        <Header />
        <About />
        </>
    )
}

export default Home