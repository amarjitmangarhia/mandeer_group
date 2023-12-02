import React from 'react'
import classes from "./Navbar.module.css"
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div className={classes.container}>
            <header>
                <div className={classes.logo} >
                  
                    <Link to="/"> Cloud Project</Link>
                </div>
           
            </header>
        </div>
    )
}

export default NavMenu