import React from 'react';
import '../../sass/components/LatestFromBlogComp.scss';

const LatestFromBlogComp =Props=>{
    return(
        <div  className='cardblog-container' >
            
             <img src={Props.image} className='cardblog-img'/>
             <div className='cardblog-txtcontainer'>
                <h1 className='cardblog-h1'>{Props.title}</h1>
                <span clasname='cardblog-span'>{Props.date}</span>
                <p className='cardblog-p'>{Props.article}</p>
             </div>
        
        </div>
    )
}

export default LatestFromBlogComp;