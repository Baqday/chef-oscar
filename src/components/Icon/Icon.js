import React,{useRef} from 'react';
import {Icons} from '../../assets/svg/svg';
import { ReactSVG } from 'react-svg'
import classes from './Icon.module.scss';

const IconImg = props =>{

    const iconKeys = props.iconKeys.key;
    const src = Icons[iconKeys];
    const svgRef = useRef(null); 

   
    
    
    return(
        
            // <img src={src} alt={iconKeys}/>
            <ReactSVG
            ref={svgRef}
            src={src}
            svgkey={iconKeys}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error)
                return
              }
            }}
            beforeInjection={svg => {
              svg.classList.add('svg-class-name')
              // svg.setAttribute('style', 'width: 200px')
            }}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
            renumerateIRIElements={false}
            wrapper="span"
            className={classes.svg}
            
           
          />
    );

}
export default IconImg;