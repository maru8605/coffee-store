import React from 'react';
import '../../sass/sections/ThreeImg.scss';

import Alfajor from '../../img/img/alfajor.jpg';
import CoffeeMug from '../../img/img/coffee-mug.jpg';
import CoffeeBeans from '../../img/img/coffee-beans-2.jpg';


const ThreeImg =()=>{
    return(
        <div className='three-img-container'>
            <div className='three-img' style={{backgroundImage:`url(${Alfajor})`}}></div>
            <div className='three-img' style={{backgroundImage:`url(${CoffeeMug})`}}></div>
            <div className='three-img' style={{backgroundImage:`url(${CoffeeBeans})`}}></div>
        </div>
    )
}

export default ThreeImg;