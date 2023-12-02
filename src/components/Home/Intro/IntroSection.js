import React from 'react'
import classes from "./IntroSection.module.css"
import undraw from "../../../assets/img/undraw.svg"
import { Link } from 'react-router-dom';

const IntroSection = () => {

  return (
    <div className={classes.container}>
        <div className={classes.content}>
        <img src={undraw} alt='' />
        <p className={classes.heading}>Only Tool You Need For Your Favourite Stocks Research</p>
        <p className={classes.numberone}>Fuel Your Research With #1 Trusted Tool WorldWide</p>
       
        <Link to="/stockDetails"> <button>Start Using</button></Link>
         </div>  
    </div>
  )
}

export default IntroSection