import React from 'react';
import TitleSections from '../../components/TitleSections/Titlesection';
import '../../sass/sections/GreatCoffee.scss';
import  GreatCoffeeImg from '../../img/img/GreatCoffee.jpg';

const title={
    sectionTitle: 'GREAT BEANS',
    sectionSubtitle:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and  will uncover many web sites still in their infancy.',
    sectionBottom:'LEARN MORE',
};


const GreatCoffee =()=>{
    return(
        <div className='greatcoffee-container' style={{backgroundImage:`url(${GreatCoffeeImg})`}}>
            <div className='greatcoffee-txtcontainer'>
                
             <TitleSections
                sectionTitle={title.sectionTitle}
                sectionSubtitle={title.sectionSubtitle}
                sectionBottom={title.sectionBottom}></TitleSections>
               
            </div>
        </div>
    )
}

export default GreatCoffee;