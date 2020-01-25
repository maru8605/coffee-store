import React from 'react';
import '../../sass/components/SelectTypeComp.scss';

import MochaLatte from '../../img/img/mocha-latte.png';
import Coffee from '../../img/img/coffee.png';
import CoffeeExpresso from '../../img/img/coffee_expresso.png';

/*
const mugCard =[
    {
        mugCardTitle:'MOCHA LATTE',
        mugCardSubtitle :'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
        mugCardTitle:'',
        mugCardSubtitle:''
    },
    {
        mugCardTitle:'',
        mugCardSubtitle:''
    },
]
*/

const SelectTypeComp =()=>{
    return (
        <div className='select-comp-container'>
            <div className='select-comp-row'>
                <div className='select-comp-row-txt'>
                    <h1 className='select-title'>WE BELIVE IN COFFEE THAT TASTES INCREDIBLE</h1>
                    <p className='select-subtitle'>
                       Sed ut perspiciatis unde omnis iste  ej natus error sit voluptatem 
                       accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                       quae ab illo.
                    </p>
                </div>
            </div>
            <div className="select-comp-mugs-container">
                <div className='mug-card'>
                    <img   className='mug-card-img' src={MochaLatte}/>
                        <h2 className='mug-card-title'>MOCHA LATTE</h2>
                        <p className='mug-card-txt'>Sed ut perspiciatis unde omnis iste natus 
                      error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
                <div className='mug-card'>
                    <img   className='mug-card-img' src={Coffee}/>
                    <h2 className='mug-card-title'>POUR OVER</h2>
                    <p className='mug-card-txt'>Sed ut perspiciatis unde omnis iste natus 
                      error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
                <div className='mug-card'>
                    <img   className='mug-card-img' src={CoffeeExpresso}/>
                    <h2 className='mug-card-title'>EXPRESSO</h2>
                    <p className='mug-card-txt'>Sed ut perspiciatis unde omnis iste natus 
                      error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
            </div>
            <div className='select-bottom'>
                <a className='select-a'>FULL MENU</a>
            </div> 
        </div>
    )
}

export default SelectTypeComp
