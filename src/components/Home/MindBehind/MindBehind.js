import React from 'react'
import classes from "./MindBehind.module.css"
import gurvir from "../../../assets/team/gurvir.png"
import piyush from "../../../assets/team/piyush.png"
import sunny from "../../../assets/team/sunny.png"
import amar from "../../../assets/team/amar.png"
import abhinav from "../../../assets/team/abhinav.png"
import saxena from "../../../assets/team/saxena.jpeg"
import ashish from "../../../assets/team/ashish.jpeg"

const MindBehind = () => {


    const images = [
        {
            id: 1,
            image: abhinav,
            alt: "abhinav"
        },
        {
            id: 5,
            image: amar,
            alt: "amar"
        },
        {
            id: 6,
            image: ashish,
            alt: "ashish"
        },
        {
            id: 2,
            image: gurvir,
            alt: "gurvir"
        },
        
        {
            id: 4,
            image: piyush,
            alt: "piyush"
        },
        {
            id: 3,
            image: sunny,
            alt: "sunny"
        },
        {
            id: 7,
            image: saxena,
            alt: "saxena"
        },
    ]

    const onMouseOverHandler = (e, data) => {
        console.log("onmouseover", data)
        console.log(e.target)
    }

    const TeamImages = () => {
        return (
            <div className={classes.team}>
                <div className={classes.teamMemberImage}>
                   {images.map((image) => {
                         return (
                                <img className={classes.img} src={image.image} key={image.id} alt={image.alt} onMouseOver={(e) => onMouseOverHandler(e, image.alt)} />

                         )
                   })}
                </div>
            </div>
        )
    }
    
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <p className={classes.heading}>Team Behind The Project</p>
            <p className={classes.desc}>Meet the dynamic team fueling our web development project with passion, creativity, and expertise, bringing innovation to every line of code.</p>
            <TeamImages />
        </div>
    </div>
  )
}

export default MindBehind