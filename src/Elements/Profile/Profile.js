import React from 'react'

import './Profile.scss'
import { images } from '../../constants/constants'


function Profile() {
    return (
        <>
            <div className="home-banner">
                <h1 className="main-banner__picture">
                    <img src={images.blini} alt="" />
                    <h1>Hello</h1>
                </h1>
                <div className="languages">
                    <img src={images.nodejs} width={220} />
                    <img src={images.reactjs} width={220} />
                    <img src={images.mongo} width={220} />
                </div>
            </div>
        </>
    )
}

export default Profile