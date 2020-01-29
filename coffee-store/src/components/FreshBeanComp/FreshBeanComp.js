import React from 'react';

import '../../sass/components/FreshBeanComp.scss';
import FreshBeanImg from '../../img/img/coffee-beans.jpg';


const FreshBeanComp =()=>{
    return(    
            <div style={{backgroundImage:`url(${FreshBeanImg})`}} className='fresh-bean-imgcontainer'>
                
            </div>
    )
}

export default FreshBeanComp;