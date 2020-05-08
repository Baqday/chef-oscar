import React from 'react';
import './Spinner.scss';
import Backdrop from  '../Backdrop/Backdrop';

const Spinner =props=>{
    return(
        <Backdrop>
            <div className="loader">Loading...</div>
        </Backdrop>
    )
}

export default Spinner;