import React from 'react';
import HomeHero from './HomeHeros/card';
import Promo from './HomeHeros/promo';
import styles from './homepage.module.css'
const HomePage = () => {
    return (
        <div  >
            <HomeHero />
            <Promo />
        </div>



    )
}
export default HomePage;