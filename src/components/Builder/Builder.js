import React,{useState,useEffect} from 'react';
import classes from './Builder.module.scss';
import Pizza from '../../assets/img/pizza-b.png';
import Burger from '../../assets/img/burger-b.png';
import {Link} from 'react-router-dom';


const Builder =  props =>{

    return (
        <div className={classes.Builder}>

                <div className={classes.Burger}>
                    <div className={classes.BurgerImg}>
                        <img src={Burger} alt='burger'/>
                    </div>
                    <div className={classes.BurgerInfo}>
                       <Link to='burger-builder'> <button className={classes.Btn}>Burger Hazırla</button></Link>
                    </div>
                </div>
                <div className={classes.Pizza}>
                    <div className={classes.PizzaInfo}>
                    
                      <Link  to='pizza-builder'><button className={classes.Btn}>Pizza Hazırla</button></Link>

                    </div>
                    <div className={classes.PizzaImg}>
                        <img src={Pizza} alt='pizza'/>
                    </div>
                    
                </div>
                
        </div>
    )

}

export default Builder;
