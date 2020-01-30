import React from 'react';
import '../../sass/components/FooterComp.scss';
import Cream from '../../img/img/coffee-cream.jpg';

const FooterComp =()=>{
    return(
        <div className='footer-container'>
            <div className='footer_half footer_half-1' style={{backgroundImage:`url(${Cream})`}}>
                <h2>COME ON IN!</h2>
                <h3>WEEKDAYS</h3>
                <p>08PM-12AM</p>
                <h3>WEEKENDS</h3>
                <p>12PM-02AM</p>
                <a>BROWSE MENU</a>
            </div>
            <div className='footer_half footer_half-2'>
                <h2>CONTACT</h2>
                <h3>PHONE</h3>
                <p>+(000)111 222 333</p>
                <h3>MAIL</h3>
                <p>adress@mail.com</p>
                <h3>ADRESS</h3>
                <p>543 TN doula street
                </p>
            </div>
        </div>
    )
}

export default FooterComp;