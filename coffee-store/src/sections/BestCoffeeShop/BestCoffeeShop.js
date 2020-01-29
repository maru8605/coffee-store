import React from 'react';
import TitleSections from '../../components/TitleSections/Titlesection';
import '../../sass/sections/BestCoffeeShop.scss';
import BestCoffeeShopImg from '../../img/img/best-coffee-shop.jpg';
import BestCoffeeShopComp from '../../components/BestCoffeeShopComp/BestCoffeeShopComp';

const title={
    sectionTitle: 'BEST COFFEE SHOP',
    sectionSubtitle:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and  will uncover many web sites still in their infancy.',
    sectionBottom:'ABOUT US',
};

const BestCoffeeShop =()=>{
    return(
        <div className='bestcoffee-container' style={{backgroundImage:`url(${BestCoffeeShopImg})`}}>
            <div className='bestcoffee-txtcontainer'>
                <div className='txtcontainer-small'>
                <TitleSections
                sectionTitle={title.sectionTitle}
                sectionSubtitle={title.sectionSubtitle}
                sectionBottom={title.sectionBottom}>
                    <BestCoffeeShopComp />
                </TitleSections>
                </div>
            
            
            </div>
        </div>
    )
}

export default BestCoffeeShop;