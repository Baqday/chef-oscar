import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './Slider.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const slider = (props)=> {

    const screen = window.innerWidth;

 
    const SliderArrow = ({onClick,to,c,icon})=>( 
          <button type="button"  
          onClick={onClick} 
          className={`${classes.SliderButton} ${c === 'pa' ? classes.pa : classes.na}`}  
          aria-label={to}><FontAwesomeIcon icon={icon}/>
          </button>
    );


    const settings = {
      dots: props.dots ? true : false,
      infinite: true,
      speed:props.speed ? props.speed :500,
      slidesToShow: props.name ==='header' && (props.show ? props.show :(screen <= 820 ? 3 :5)),
      slidesToScroll:props.scroll ? props.scroll :1,
      autoplay: props.autoPlay,
      arrows: true,
      prevArrow: <SliderArrow to='prev' c ='pa' icon='angle-left'/>,
      nextArrow: <SliderArrow to='next' c='na' icon='angle-right'/>,



    };
  
   
    let header = props.name === 'header' && props.images.map((image,i)=>(
                       <div onClick={()=>props.selectCategory(image.title)} key={i} className={classes.Parent}>
                            <div className={classes.layer}>{image.title}</div>
                            <img className={classes.img} src={image.src} alt={image.alt}/>
                       </div>
                      
                     )    
            );
            
    return (
      <>
        <Slider  {...settings}>
          {header}
        </Slider>
        </>
    );
  
}

export default slider;