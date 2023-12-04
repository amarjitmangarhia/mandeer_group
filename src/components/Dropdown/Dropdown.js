import React,{useEffect} from 'react'
import classes from "./Dropdown.module.css"
import {dropdownOptions} from '../Global';
const Dropdown = (props) => {

  useEffect(()=>{
      console.log( props.selectedDropdownIndex);
  },[])
  return (
    <>    
    <div className={classes.content}>
    <div className={classes.text}>Search Your Favourite Stock</div>
        <div className={classes.container}>
          <div className={classes.dropdown}>
            <select id="dropdown"  value={dropdownOptions[props.selectedDropdownIndex].value} onChange={(event)=>{
              props.onChange(event)
            }}  name="dropdown">
              {
                dropdownOptions.map((entry)=>{
                  return <option value={entry.value}>{entry.name}</option>
                })
              }
            </select>
        <div className={classes.button}>
          <button>Fetch</button>
        </div>
        </div>
        </div>
        </div>
    </>


  )
}

export default Dropdown