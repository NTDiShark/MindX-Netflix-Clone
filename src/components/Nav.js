import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className='nav'>
            <div className='nav-contents'>
                <div style={{display: 'flex', marginLeft: '170px'}}>
                    <img
                    className='nav-logo' 
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
                    alt=''/>
                    <div className='nav-item'>Home</div>
                    <div className='nav-item'>TV Show</div>
                    <div className='nav-item'>Movies</div>
                    <div className='nav-item'>Recently Added</div>
                    <div className='nav-item'>My List</div>
                </div>    
                <img 
                    className='nav-avatar'
                    src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg' 
                    alt=''/>
            </div>
        </div>
    );
}

export default Nav;
