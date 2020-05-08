import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {fetchRestaurants} from '../../../graphql/query';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './List.module.scss';
import Card from './Card/Card';
import {connect} from 'react-redux';
import * as userActions from '../../../store/actions/index';
import store from 'store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ListRestaurants =props=>{

    const [restaurants,setRestaurants] = useState([]);
    const [restaurantsLoca,setRestaurantsLoca] = useState([]);

    const [spinner,setSpinner] = useState(false);

    const [grid,setGrid] = useState('table');



    

   



    
    useEffect(()=>{
        setSpinner(true);
        if(props.restaurants){
            setRestaurants([...props.restaurants]);
            setSpinner(false);
            props.onDataLoader(true);
            let loca = props.restaurants.map(item=>{
                return item.lat+','+item.lng
            })
            loca && setRestaurantsLoca(loca)
            

        }else{
                axios.post('http://localhost:5000/graphql', fetchRestaurants)

                .then(res => {
                    if (res.status !== 200 && res.status !== 201) {
                        throw new Error('Failed!');
                    }
                
                        setRestaurants([...res.data.data.restaurants]);
                        setSpinner(false);
                        props.onDataLoader(true);
                        props.onDataSave([...res.data.data.restaurants]);
                        let loca = res.data.data.restaurants.map(item=>{
                            return item.lat+','+item.lng
                        })
                        loca && setRestaurantsLoca(loca)

                        const destinations = 
                        store.get('user')  ? 
                        [`
                        ${store.get('user').info.location.geometry.location.lat},
                        ${store.get('user').info.location.geometry.location.lng}
                        `] :
                        null

                        // if(loca && destinations){
                        //     const matrix = new window.google.maps.DistanceMatrixService();
            
                        //     matrix.getDistanceMatrix({
                        //     origins: loca,
                        //     destinations: destinations,
                        //     travelMode: window.google.maps.TravelMode.DRIVING,
                        //     },(response, status)=>{ 
                                
                        //        if(response && response.rows && response.rows.length>0){
                                    
            
                        //             let newRes =   res.data.data.restaurants.map((item,i)=>{
            
                        //                 return {
                        //                     ...item,
                        //                     distance:response.rows[i].elements[0].distance.value,
                        //                     duration:response.rows[i].elements[0].duration.value
                        //                 }
                        //             })
            
                        //         props.onDataSave([...newRes]);
            
            
            
                        //         }
                        //     });
                        // }


                })
                .catch(err => {
                console.log(err);
                });
        }


    },[props.restaurants])

    useEffect(()=>{
            

       setRestaurants(props.category)

       

    },[props.category])



    const gridHandler = grid =>{

        setGrid(grid);


    }
    
   
    
    

    const loader = spinner && <Spinner/>;
    return(
        <React.Fragment>
            {loader}
            <div   className={classes.SP}>
            <div className={classes.RestaurantFilter}>
                <div className={classes.ResTitle}>
                <h1>Restaurants</h1>

                </div>
                <div className={classes.ResFilter}>
                    <button onClick={()=>gridHandler('table')} className={grid === 'table' ? [classes.GridBtn,classes.ActiveGrid].join(' ') : classes.GridBtn}>
                      <FontAwesomeIcon icon='th'  />
                    </button>
                    <button onClick={()=>gridHandler('list')}  className={grid === 'list' ? [classes.ListBtn,classes.ActiveGrid].join(' ') : classes.ListBtn}>
                      <FontAwesomeIcon icon='th-list'  />

                    </button>

                </div>
            </div>

            <div className ={classes.Section}>
                <div className={classes.Title}></div>
                <div className={classes.Content}>
                    <Card 
                    data={restaurants ? restaurants : props.restaurants} 
                    type='nearby'
                    gridType={grid}
                    />
                    
                </div>

            </div>
            </div>
        </React.Fragment>
        
    )

}


const mapStateToProps = state =>{

    return{
        restaurants:state.restaurants,
        category:state.category,
        distances:state.distances

    }
}


const mapDispatchToProps = dispatch =>{

    return{
        onDataLoader:(status)=>dispatch(userActions.addDataLoader(status)),
        onDataSave:(data)=>dispatch(userActions.addDataSave(data)),
        onDistance:(data)=>dispatch(userActions.addDistance(data)),


        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListRestaurants);