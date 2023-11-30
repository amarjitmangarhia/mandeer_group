import React from 'react'
import classes from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.sections}>
            <div className={classes.impArticles}>
                <p>How to buy Stocks</p>
                <p>How to Read Stock Charts</p>
                <p>When to Sell Stocks</p>
                <p>Buy A Dip 2023</p>
            </div>
            <div className={classes.branding}>
                <p>Cloud Project</p>
            </div>
            <div className={classes.impLinks}>
                <p>Stock Market Today</p>
                <p>Investing Workspace</p>
                <p>Economy</p>
                <p>Best Online Brokers</p>
            </div>
        </div>
        <div className={classes.impNotes}>
            
            
            <p>Notice: Information contained herein is not and should not be construed as an offer, solicitation, or recommendation to buy or sell securities. The information has been obtained from sources we believe to be reliable; however no guarantee is made or implied with respect to its accuracy, timeliness, or completeness. Authors may own the stocks they discuss. The information and content are subject to change without notice.</p>
       <br />
        <p>*Real-time prices by API. Realtime quote and/or trade prices are not sourced from all markets.</p>
        <br />
        <p>© 2000-2023 Cloud Project, LLC. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer