import React,{useState,useEffect} from 'react';
import classes from './Header.module.scss';
import {Link} from 'react-router-dom';


import {connect} from 'react-redux';
import * as userActions from '../../store/actions/index';


import Slider from '../Slider/Slider';

import fries from '../../assets/img/fries.jpeg';
import burger from '../../assets/img/burger.jpeg';
import soup from '../../assets/img/soup.jpeg';
import salad from '../../assets/img/salad.jpeg';
import snacks from '../../assets/img/snacks.jpeg';
import kebab from '../../assets/img/kebab.jpeg';
import sauces from '../../assets/img/sauces.jpeg';
import drinks from '../../assets/img/drinks.jpeg';
import dessert from '../../assets/img/desserts.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Header = props =>{

    const [restaurants,setRestaurants] = useState(null);
    const [category,setCategory] = useState([]);

    const [activeCategory,setActiveCategory] = useState(null);
    const [sliderAutoplay,setSliderAutoplay] = useState(true);



    const image =[
        {title:'salad',src:salad,alt:'salad'},
        {title:'burger',src:burger,alt:'burger'},
        {title:'snack',src:snacks,alt:'sandwich'},
        {title:'soup',src:soup,alt:'soup'},
        {title:'sauce',src:sauces,alt:'sauces'},
        {title:'drink',src:drinks,alt:'drinks'},
        {title:'kebab',src:kebab,alt:'kebab'},
        {title:'fries',src:fries,alt:'fries'},
        {title:'dessert',src:dessert,alt:'desserts'}


    ];

    useEffect(()=>{

        setRestaurants(props.restaurants)
        
    },[props.restaurants])

    useEffect(()=>{

        let categoryArr = [];
        restaurants && restaurants.map(restaurant=>{

            categoryArr.push(...restaurant.category)

        })

     let seen = new Set();
     let filterCategory =   categoryArr && categoryArr.filter((item,index)=>{

        const duplicate = seen.has(item.key);
        seen.add(item.key);
        return !duplicate;
     })

     filterCategory && setCategory(filterCategory)
     


        
    },[restaurants])



    const settings ={
        image:true,
        text:true,
        position:'center-center',
        images:image,
        name:'header',
      

    };

    const selectCategory= event =>{
        
        setSliderAutoplay(false)
        let restaurantsFilter = restaurants && restaurants.map(restaurant=>{

           let category  = restaurant.category.filter(item=>{

                return item.key === event;
            });

            return {
                ...restaurant,
                category:category
            }

        }).filter(item=>{

            return item.category.length > 0;
        });

        

        props.onCategorySave(restaurantsFilter);

    }



    return (
        <>
        <div className={classes.Header}>
            <div className={classes.Cuisine}>
                <div className={classes.LinkButton}>
                    <Link to='/cook' className={classes.Link}>Özün Hazırla</Link>
                </div>
            </div>
            <div className={classes.Restaurant}>
                <div className={classes.LinkButton}>
                    <Link to='/reservation' className={classes.Link}>Masa Rezerv Et</Link>
                </div>
            </div>
            <div className={classes.Market}>
                <div className={classes.LinkButton}>
                    <Link to='/market' className={classes.Link}>Marketdən Alış-Veriş Et</Link>
                </div>
            </div>
        </div>
        <div className={classes.MenuSlider}>
                <div className={classes.Slider}>
                    <h1 className={classes.Title}>Categories</h1>
                    {!sliderAutoplay  && <div onClick={()=>setSliderAutoplay(true)} className={classes.PausePlay}>
                        <FontAwesomeIcon  icon='play' />
                    </div>}
                    <Slider  autoPlay ={sliderAutoplay} selectCategory={(event)=>selectCategory(event)} {...settings}/>
                </div>
            </div>
        </>
    );

}

const mapStateToProps = state =>{

    return{
        restaurants:state.restaurants,
    }
}

const mapDispatchToProps = dispatch =>{

    return{
        onCategorySave:(data)=>dispatch(userActions.addCategorySave(data)),

        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);