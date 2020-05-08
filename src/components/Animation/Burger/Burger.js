import React,{useState,useEffect,useRef} from 'react';
import classes from './Burger.module.scss';

import BreadTop from '../../../assets/img/bread-top.png';
import X1 from '../../../assets/img/x-1.png';
import X2 from '../../../assets/img/x-2.png';
import X3 from '../../../assets/img/x-3.png';

import Green1 from '../../../assets/img/green-t.png';
import Green2 from '../../../assets/img/green-t2.png';
import GreenB from '../../../assets/img/green-b.png';
import Meat from '../../../assets/img/meat-1.png';
import Cheese from '../../../assets/img/cheese.png';
import Domato from '../../../assets/img/p-2.png';
import Domato2 from '../../../assets/img/p-1.png';
import Orion1 from '../../../assets/img/s-1.png';
import Orion2 from '../../../assets/img/s-2.png';











const Burger = props =>{

    const refLYR = useRef(null);

    const refBurgerSection = useRef(null);
    const refBreadTop = useRef(null);
    const refGreen1 = useRef(null);
    const refGreen2 = useRef(null);
    const refX1= useRef(null);
    const refX2= useRef(null);
    const refOrion1= useRef(null);
    const refOrion2= useRef(null);

    const refBreadBottom= useRef(null);
    const refDomato1= useRef(null);
    const refDomato2= useRef(null);
    const refX3= useRef(null);
    const refCheese= useRef(null);
    const refMeat= useRef(null);
    const refGreenB= useRef(null);






    useEffect(()=>{

              
        window.addEventListener('scroll',HandleScroll,true);
       

    },[]);



const HandleScroll = event=>{
    if(refLYR && refLYR.current && refLYR.current.offsetTop){

        let element = refLYR.current.offsetTop;

        let windowOffset =window.pageYOffset;
    
        let clone =  refX1.current.cloneNode(true);
clone.setAttribute('data-clone','clone')
        refBreadTop.current.appendChild(clone)

    
        



    }
    
   

}









    return (
        <React.Fragment>
        <div  ref={refLYR} id='test' className={classes.LYR}></div>
        <div className={classes.BurgerSection} ref={refBurgerSection}>
                <div className={classes.BurgerDiv}>
                    <div ref={refBreadTop} className={classes.BreadTop}>
                        <img src={BreadTop} alt='BreadTop'/>
                            <div ref={refGreen1} className={classes.Green1}>
                                <img src={Green1} alt='g1'/>

                            </div>
                            <div ref={refX1} className={classes.X1}>
                                <img src={X1} alt='x1'/>

                            </div>
                            <div  ref={refGreen2} className={classes.Green2}>
                                <img src={Green2} alt='g2'/>

                            </div>
                            <div ref={refX2} className={classes.X2}>
                                <img src={X2} alt='X2'/>

                            </div>
                            <div ref={refOrion1} className={classes.Orion1}>
                                <img src={Orion1} alt='orion1'/>

                            </div>
                            <div ref={refOrion2} className={classes.Orion2}>
                                <img src={Orion2} alt='orion2'/>

                            </div>

                    </div>
                    <div ref={refBreadBottom} className={classes.BreadBottom}>
                        <img className={classes.BreadBottomBread} src={BreadTop} alt='BreadBottom'/>

                        
                        <div ref={refDomato2} className={classes.Domato2}>
                                <img src={Domato2} alt='domato2'/>

                            </div>
                        <div ref={refDomato1} className={classes.Domato}>
                                <img src={Domato} alt='domato'/>

                            </div>
                            <div ref={refX3} className={classes.X3}>
                                <img src={X3} alt='X3'/>

                            </div>
                            <div ref={refCheese} className={classes.Cheese}>
                                    <img src={Cheese} alt='cheese'/>

                            </div>
                            <div ref={refMeat} className={classes.Meat}>
                                    <img src={Meat} alt='meat'/>

                            </div>
                            <div ref={refGreenB} className={classes.GreenB}>
                                    <img src={GreenB} alt='gb'/>

                            </div>

                    </div>

                </div>
        </div>
        </React.Fragment>
    )
}

export default  Burger;