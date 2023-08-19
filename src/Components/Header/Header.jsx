import React from 'react';
import './Header.css'
import headerImage from '../../Images/0cce11f75d37450988cb174c61b28518.jpeg'

const Header = () => { 
    
    return (
        <div className='header'>
            <h1 className='header-headline'>Knowledge Cafe</h1>
            <img  src={headerImage} alt="" />
        </div>
    );
};

export default Header;