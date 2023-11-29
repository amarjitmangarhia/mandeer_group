import React from 'react'
import classes from "./Dropdown.module.css"

const Dropdown = () => {
  return (
    <>    
        <div className={classes.container}>
          <div className={classes.dropdown}>
            <select id="dropdown" name="dropdown">
            <option value="option1">Apple</option>
            <option value="option2">Alphabet</option>
            <option value="option3">Google</option>
            </select>
        <button>Fetch</button>
        </div>
        </div>
    </>


  )
}

export default Dropdown