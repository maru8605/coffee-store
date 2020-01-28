import React from 'react';
import OurStoryComp from '../../components/OurStory/OurStoryComp';
import GranosCafe from '../../img/img/granos-cafe.jpg';

import '../../sass/sections/OurStory.scss';

const OurStory =()=> {
    return (
        <div>
        <div className='our-story-container'  >
             <OurStoryComp></OurStoryComp> 
        </div>
        <div style={{backgroundImage:`url(${GranosCafe})`}} className='prueba'>

        </div>
    </div>
    )
}

export default OurStory


