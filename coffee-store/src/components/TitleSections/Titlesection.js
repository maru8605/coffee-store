import React from 'react';
import '../../sass/components/TitleSections.scss';

const TitleSections =props=>{
    return(
      <div className='title-container'>
      <h1 className='h1'>{props.sectionTitle}</h1>
      <p className='p'>{props.sectionSubtitle}</p>
      <a className='bottom'>{props.sectionBottom}</a>
      </div>
    )
}

export default TitleSections