import React from 'react';
import '../../sass/components/HeaderComponent.scss';
// import Arrow from '../../img/img/down-arrow.svg';


const HeaderComponent =()=>{
    return(
        <div className='headercomponent-container'>
            <div className='headercomponent-textcontainer'>
                <h1>COFFEE HOUSE</h1>
                <p className='headerComponent-p'>Serving only the best since 2013</p>
                <a href='#' className='headerComponent-a'>SHOP</a>
            </div>
            <div>
    <img className='headercomponent-arrow' />
            </div>
        </div>
    )
}

export default HeaderComponent