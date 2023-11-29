// HelloComponent.js

import React from 'react';
import classes from "./Wrapper.module.css"

// Functional component
function Wrapper(props) {

  return (
    <div className={classes.container}>
      {props.children}
    </div>
  );
}

export default Wrapper;