import React from 'react'
import classes from "./News.module.css"
import NewsContent from './NewsContent'
import NewsData from './NewsData'

const News = () => {
console.log(NewsData)
  return (
    <div className={classes.container}>
            <h2>Latest Stock News</h2>
               {NewsData.map((news) => {
                  return  <NewsContent heading = {news.heading} newsContent = {news.newsContent} img = {news.img} key={news.id}/>
               })}
    </div>
  )
}

export default News