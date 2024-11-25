import React from 'react';
import styles from "../Styles/navbar.css";
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>

            <div className={styles.navbarContainer}>

                <div className={styles.appName}>
                    <NavLink to="/">
                        <i class="fa-solid fa-leaf"></i>
                        SKB
                    </NavLink>


                </div>

                <div className={styles.navLinks}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/aboutus">AboutUs</NavLink>
                    <NavLink to="/myorder">MyOrder</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                </div>
        </div>
        </div>
    )
}
