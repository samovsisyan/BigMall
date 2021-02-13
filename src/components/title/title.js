import React from 'react';
import classes from './title.module.scss'
function Title({title,align}) {
    return(
        <h3 className={`text-${align} ${classes.title}`}>{title}</h3>
    )
}
export default Title