import React from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../../Backdrop/Backdrop';

const UserModal = props =>{
    
    const backdropprops = props.bgdark ? true : false;

    return(
        <Backdrop closeBackdrop={props.closeBackdrop} bgdark={backdropprops}>
            <div className={classes.Modal}>
                {props.children}
            </div>
        </Backdrop>
    );
}

export default UserModal;