import React from 'react';
import classes from './BackdropFood.module.scss';


const Backdrop = props =>{

    return (
        <div className={classes.BackdropFood}>
            {props.children}
        </div>
    );
}

export default Backdrop;