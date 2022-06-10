import React from 'react'

import './Profile.scss'
import { images } from '../../constants/constants'

function Profile() {
    return (
        <>
            <div className="home-banner">
                <div className="main-banner__description">
                    <h1>WELCOME</h1>
                    <span>
                        Welcome to my personal website.<br />
                        21 years old, from Kosovo. <br />
                        Mongo, Express, React, Node and no suggar on my coffee.
                    </span>
                </div>
                <div className="main-banner__picture">
                    <img src={images.blini}  className="profile-picture__main"alt="" />
                </div>
                <div className="main-banner__languages">
                    <img src={images.nodejs} width={220} />
                    <img className="react-logo__main" src={images.reactjs} width={220} />
                    <img src={images.mongo} width={220} />
                </div>
            </div>
        </>
    )
}

export default Profile