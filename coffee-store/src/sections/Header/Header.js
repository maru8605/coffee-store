import React from 'react';
import '../../sass/sections/Header.scss';
import HeaderComponent from '../../components/Header/HeaderComponent.js';
import BackgroundHeader from '../../img/img/header-coffee.jpg';
// import el componente

const Header =()=>{
    return (
        
        <div className='header' style={{backgroundImage:`url(${BackgroundHeader})`}}>
            <HeaderComponent></HeaderComponent>
        </div>
      
    )
}

export default Header