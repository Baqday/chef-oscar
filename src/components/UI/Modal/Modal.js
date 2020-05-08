import React,{useState} from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props =>{
   
    const backdropprops = props.bgdark ? true : false;
    return(
        <Backdrop closeBackdrop ={props.closeBackdrop} bgdark = {backdropprops}>
            <div  style={props.style && props.style} className={classes.Modal}>
                {props.children}
            </div>
        </Backdrop>
    );

}

export default Modal;