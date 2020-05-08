import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../../../store/actions/index';
// import Truck from '../../../../assets/svg/truck.svg';

import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';


import classes from './Card.module.scss';


const Card =(props)=>{

    const [restaurants,setRestaurants] = useState(null);
    const [nearbyRestaurants,setNearbyRestaurants] = useState(null);



   


   
    useEffect(()=>{


        let nearbyRes = props.data && props.data.sort((a,b) => 
                            a.distance > b.distance ? 1 
                            :(b.distance > a.distance ? -1 : 0)
                         );
                         setNearbyRestaurants(nearbyRes);

  
    },[props.data]);    

   
    

    const grid =props.type === 'nearby' && nearbyRestaurants && nearbyRestaurants.map((data,i)=> {
       
      return  <Link 
            key={i}
            style={{textDecoration:'none'}}
            to={`/restaurant/`+data.name.trim().replace(/'/g, '').replace(/\s/g, '-')}
            onClick={()=>props.onRestaurantSelected(data)}
            >
            <div  className={props.gridType === 'table' ? classes.GridTable : classes.GridList}>
                
                <div className={classes.Photo}>
                    <img src={`http://localhost:5000/uploads/`+data.photo} alt ={data.name}/>
                </div>
                <div className={classes.Info_a}>
                <span>{data.name}</span>
                {props.gridType === 'list' && <span>{data.address}</span>}
                <span>{data.category && props.gridType === 'table' ? 
                data.category.map(field=>{
                     return field.name;
                }).slice(0,4).toString()+'...'
                :data.category.map(field=>{
                    return field.name;
               })
                }
                
                </span>
                <span><StarRatings
                        rating={data.rating}
                        starRatedColor="yellow"
                        //   changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                        
                    />   
                    </span>
                <div  className={classes.Date}>
                 
                 <div className={classes.Duration}>
                     {parseInt(+data.duration/60+15)+' min'}
                </div>
                 <div className={classes.Distance}>
                     {parseFloat(data.distance/1000).toFixed(2)+ ' km'}
                </div>

                {/* <img src={Truck} alt='truck'/><div className={classes.TruckLayer}></div> */}
                 
               
                 </div>
                </div>
            


            </div>
        </Link>
        // }
    });

    return(
        <>
        {grid}
        </>
    )

}

const mapStateToProps = state =>{

    return{
        restaurants:state.restaurants,
      
    }
}



const mapDispatchToProps = dispatch =>{

    return{
        onRestaurantSelected:(data)=>dispatch(userActions.addActiveRestaurantData(data)),
        onDataSave:(data)=>dispatch(userActions.addDataSave(data)),

        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);