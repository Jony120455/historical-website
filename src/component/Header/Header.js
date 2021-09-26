import React from 'react';
import './Header.css'

// header component here 
const Header = () => {
    return (
        <div className="mainHeader">
            <div className="header_container">
                { <h2><a href="./logo"><i class="fas fa-globe-asia"></i>Historical Place In Bangladesh</a></h2>}
                <ul>
                    <li>Population</li>
                    <li>Beautiful place</li>
                    <li>Area</li>
                    <li>More..</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;