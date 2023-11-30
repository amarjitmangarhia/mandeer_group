import React from 'react'
import graphImage from "./../../assets/img/graph.jpg"
import classes from "./Graph.module.css"

const Graph = () => {
  return (
    <div className={classes.container}>
      <h1>Graph Analysis</h1>
            <img src={graphImage} alt='graphImage' />
    </div>
  )
}

export default Graph