import React from 'react';
import TitleSections from '../../components/TitleSections/Titlesection';
// import FreshBeanComp from '../../components/FreshBeanComp/FreshBeanComp';
import '../../sass/sections/FreshBean.scss';
import FreshBeanImg from '../../img/img/coffee-beans.jpg';


const title={
    sectionTitle: 'FRESH BEAN',
    sectionSubtitle:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and  will uncover many web sites still in their infancy.',
    sectionBottom:'LEARN MORE',
};

const FreshBean =()=>{
    return(
        <div className='fresh-bean-container'>
             <div className='fresh-bean-txtcontainer'>
                <TitleSections
                sectionTitle={title.sectionTitle}
                sectionSubtitle={title.sectionSubtitle}
                sectionBottom={title.sectionBottom}></TitleSections>
             </div>
             <div style={{backgroundImage:`url(${FreshBeanImg})`}} className='fresh-bean-imgcontainer'></div>
             </div>
    )
};

export default FreshBean;