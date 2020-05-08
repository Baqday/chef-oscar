import React from 'react';
import { ReactSVG } from 'react-svg';

const Icon = props=>{

    let icon = props.icon;
    let color = props.color;
    return(
        <ReactSVG
                src={icon}
                        
                afterInjection={(error, svg) => {
                if (error) {
                    console.error(error)
                    return
                }
                }}
                beforeInjection={svg => {
                svg.classList.add('svg-class-name')
                svg.setAttribute('style', `fill:${color}`)
                }}
                evalScripts="always"
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
                renumerateIRIElements={false}
                wrapper="span"
                className='svg'
                            
                        
        />
    )
}

export default Icon;