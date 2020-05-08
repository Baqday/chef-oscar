import React from 'react';
import classes from './SpinnerFood.module.scss';
import BackdropFood from  '../Backdrop/BackdropFood';
import {Icons} from '../../../assets/svg/svg';

import { ReactSVG } from 'react-svg';



const Spinner =props=>{

    const iconKeys = props.iconKeys.key;
    const src = Icons[iconKeys];

    return(
        <BackdropFood>
            <div className={classes.SpinnerFood}>
            <div className={classes.loader}>Loading...</div>

            <ReactSVG
            src={src}
            svgkey={iconKeys}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error)
                return
              }
            }}
            beforeInjection={svg => {
              svg.classList.add(classes.svgclassname)
              // svg.setAttribute('style', 'width: 200px')
            }}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
            renumerateIRIElements={false}
            wrapper="span"
            className={classes.svg}
            
           
          />
            </div>
        </BackdropFood>
    )
}

export default Spinner;