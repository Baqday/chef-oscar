import React, { useState, useEffect } from 'react';
import classes from './PizzaBox.module.scss';

const Box = props =>{


    let size = props.pizzaSize && props.pizzaSize.type.replace(/_/g, ' ');
    let sizePrice = props.pizzaSize && '-'+ props.pizzaSize.price+' AZN';
    let border = props.pizzaBorder && props.pizzaBorder.type.replace(/_/g, ' ');
    let borderPrice = props.pizzaBorder && '-'+ props.pizzaBorder.price+' AZN';
    let weight = props.pizzaWeight && props.pizzaWeight.type.replace(/_/g, ' ');
    let weightPrice = props.pizzaWeight && '-'+ props.pizzaWeight.price+' AZN';
    
  
    return(
        <div className={props.order ? [classes.PizzaBox,classes.ActiveBox].join(' ') : [classes.PizzaBox,classes.PizzaBoxDeactive].join(' ')}>
              <div className={classes.PizzaSize}>Pizza Size:<small><i>{size}</i></small><small><i>{sizePrice}</i></small></div>
              <div className={classes.PizzaBorder}>Pizza Border: <small><i>{border}</i></small><small><i>{borderPrice}</i></small></div>
              <div className={classes.PizzaWeight}>Pizza Weight: <small><i>{weight}</i></small><small><i>{weightPrice}</i></small></div>
              {/* <div className={classes.PizzaIngr}>Ingredients</div> */}
              <div className={classes.PizzaPrice}>Total Price:
              {props.price ? props.price : 0} AZN
              </div>


              

        </div>
    );
}

export default Box;
