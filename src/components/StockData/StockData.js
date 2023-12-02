import React from 'react'
import classes from "./StockData.module.css"

const StockData = () => {

    const Card = () => {
        return (
            <div className={classes.card}>
                <p className={classes.heading}>Stock Data</p>
                <hr />
                <div className={classes.data}>
                    <div className={classes.row}>
                        <p>Open</p>
                        <p>100</p>
                       
                    </div>
                    <hr />
                    <div className={classes.row}>
                        <p>High</p>
                        <p>100</p>
                    </div>
                    <hr />
                    <div className={classes.row}>
                        <p>Low</p>
                        <p>100</p>
                    </div>
                    <hr />
                    <div className={classes.row}>
                        <p>Close</p>
                        <p>100</p>
                    </div>
                    <hr />
                    <div className={classes.row}>
                        <p>Volume</p>
                        <p>100</p>
                    </div>
                  
                </div>
            </div>
        )
    }

  return (
    <div className={classes.container}>
        <p className={classes.heading}>Stock Data</p>
        <Card />
        <div className={classes.buttons}>
        <button>Next</button>
        <button>Previous</button>
        </div>
    </div>
  )
}

export default StockData