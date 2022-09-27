

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <>
            <div>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About Us</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Nav;
