import React from 'react';
import '../../sass/components/SelectTypeComp.scss';

// import MochaLatte from '../../img/img/mocha-latte.png';
// import Coffee from '../../img/img/coffee.png';
// import CoffeeExpresso from '../../img/img/coffee_expresso.png';

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

const SelectTypeComp =props=>{
    return (
        
        
            <div className="select-comp-mugs-container">
                <div className='mug-card'>
                    <img   className='mug-card-img' src={props.image}/>
                        <h2 className='mug-card-title'>{props.title}</h2>
                        <p className='mug-card-txt'>{props.subtitle}</p>
                </div>    
            </div>
         
        
    )
}

export default SelectTypeComp
