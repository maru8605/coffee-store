import React from 'react';
import SelectTypeCont from '../../components/SelectType/SelectTypeComp';
import '../../sass/sections/SelectType.scss';
import MochaLatte from '../../img/img/mocha-latte.png';
import Coffee from '../../img/img/coffee.png';
import CoffeeExpresso from '../../img/img/coffee_expresso.png';

const mugCard =[
    {
        title:'MOCHA LATTE',
        subtitle :'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        image: MochaLatte
    },
    {
        title:'POUR OVER',
        subtitle:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        image:Coffee
    },
    {
        title:'EXPRESSO',
        subtitle:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        image: CoffeeExpresso
    },
]

const SelectType =()=>{
    return (
        <div className='select-type-container'>
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
            <div className='mugcard-container'>
            {mugCard.map (mugCard => {
            return (<SelectTypeCont title={mugCard.title}
                   subtitle={mugCard.subtitle}
                   image={mugCard.image}></SelectTypeCont>);
      })}
            </div>
            <div className='select-bottom'>
                <a className='select-a'>FULL MENU</a>
            </div> 
      </div>
    )
}

export default SelectType


