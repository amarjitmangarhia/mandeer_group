import React from 'react'
import classes from "./Navbar.module.css"

const NavMenu = () => {
    return (
        <div className={classes.container}>
            <header>
                <div className={classes.logo} >
                    Cloud Project
                </div>
                <div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                </div>
            </header>
        </div>
    )
}

export default NavMenu