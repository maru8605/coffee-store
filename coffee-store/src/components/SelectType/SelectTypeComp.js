import React from 'react';
import '../../sass/components/SelectTypeComp.scss';



const SelectTypeComp =props=>{
    return (
        
        
        
                <div className='mug-card'>
                    <img   className='mug-card-img' src={props.image}/>
                        <h2 className='mug-card-title'>{props.title}</h2>
                        <p className='mug-card-txt'>{props.subtitle}</p>
                </div>    
         
        
    )
}

export default SelectTypeComp
