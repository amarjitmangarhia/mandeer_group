import React,{useEffect} from 'react'
import classes from "./News.module.css"
import NewsContent from './NewsContent'


const News = (data) => {
  useEffect(() => {
  

  

    console.log(data.data,"newscomponent"); // Call the asynchronous function
   
  }, []);
  return (
    <div className={classes.container}>
            <h2>Latest Stock News</h2>
               {data.data.map((news) => {
                  return  <NewsContent heading = {news.title} newsContent = {news.description} img = {news.urlToImage} key={news.id}/>
               })}
    </div>
)
}

export default News