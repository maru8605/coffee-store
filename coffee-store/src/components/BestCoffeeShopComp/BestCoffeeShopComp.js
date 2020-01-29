import React from 'react';
import '../../sass/components/BestCoffeeShopComp.scss';
import Icon_1 from '../../img/img/icon_1.png';
import Icon_2 from '../../img/img/icon_2.png';
import Icon_3 from '../../img/img/icon_3.png';


const BestCoffeeShopComp =()=>{
    return(
        <div>
            <img src={Icon_1} className='icon-1'/>
            <img src={Icon_2} className='icon-2'/>
            <img src={Icon_3} className='icon-3'/>
        </div>
    )
}

export default BestCoffeeShopComp;