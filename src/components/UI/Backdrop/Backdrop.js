import React from 'react';
import classes from './Backdrop.module.scss';


const Backdrop = props =>{

    return (
        <div className={props.bgdark ? classes.BackdropDark : classes.BackdropLight}>
            {props.children}
            <div onClick={props.closeBackdrop} className={classes.Close}></div>
        </div>
    );
}

export default Backdrop;