import React from 'react'
import classes from "./NewsContent.module.css"
import newsImage from "../../assets/img/news.png"


const NewsContent = ({heading, newsContent, img}) => {
    return (
        <div className={classes.news}>
            <div className={classes.image}>
                <img src={img} alt='' />
            </div>
            <div className={classes.content}>
                <h3>{heading}</h3>
                <p>{newsContent}</p>
            </div>
        </div>

    )
}

export default NewsContent