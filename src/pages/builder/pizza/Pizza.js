import React, { useState, useEffect ,useRef} from 'react';

import classes from './Pizza.module.scss';

import PizzaDough from './img/pizza-dough.svg';

import PizzaTomato from './img/pizza-tomato.svg';
import PizzaBarbeque from './img/pizza-barbeque.svg';
import PizzaCheese from './img/pizza-cheese.svg';
import Ingredients from './img/ingredients.svg';

import Tomato from './img/tomato-i.svg';
import Salami from './img/salami-i.svg';
import Sausages from './img/sausages-i.svg';
import OlivesBlack from './img/olives-black-i.svg';
import Pepper from './img/pepper.svg';
import Pineapple from './img/pineapple-i.svg';
import Champignon from './img/champignon-i.svg';
import Paprika from './img/paprika-i.svg';
import Onion from './img/onion-i.svg';

import Sausage1 from './img/sausage-1.svg';
import Olive1 from './img/olive.svg';
import Domato1 from './img/domato.svg';
import Paprika1 from './img/paprika-s.svg';
import Onion1 from './img/onion.svg';
import Paprika2 from './img/paprika-c.svg';
import Pineapple2 from './img/pineapple-2.svg';



import PizzaSlice from './img/slice-i.svg';
import PizzaIcon from './img/pizza-i.svg';
import PizzaWeight from './img/weight.svg';



import Icon from './PizzaSvg';
import Box from './box/PizzaBox';

const PizzaBuilder  = props =>{

    const  [menuType,setMenuType] = useState(null);
    const  [pizzaType,setPizzaType] = useState(null);
    const  [pizzaBorder,setPizzaBorder] = useState(null);
    const  [pizzaWeight,setPizzaWeight] = useState(null);
    const  [pizzaIngredients,setPizzaIngredients] = useState(null);
    const  [pizzaIngredientsArr,setPizzaIngredientsArr] = useState([]);


    const  [pizzaSlice,setPizzaSlice] = useState(6);
    const  [pizzaSliceArr,setPizzaSliceArr] = useState(null);



    const  [pizzaAnime,setPizzaAnime] = useState(false);


    const  [pizzaDough,setPizzaDough] = useState(true);
    const  [cart,setCart] = useState([]);




    const pizzaList = [
        {   type:'size',
            icon:<Icon color={menuType === 'size' ? '#FFF' :'rgb(82, 81, 81)'} icon={PizzaSlice}/>,
            text:'Pizza Ölçüsü',
            pizzaSize:[
                {type:'Small Pizza',size:'25 sm',slices:6,price:8},
                {type:'Medium Pizza',size:'30 sm',slices:8,price:10},
                {type:'Large Pizza',size:'35 sm',slices:10,price:12},
                {type:'Extra Large Pizza',size:'45 sm',slices:12,price:16}
            ]
        },
        {   type:'dough',
            icon:<Icon color={menuType === 'dough' ? '#FFF' :'rgb(82, 81, 81)'} icon={PizzaIcon}/>,
            text:'Pizza Kənarları',
            pizzaBorder:[
                {type:'Domato',price:1},
                {type:'Barbeque',price:1.50},
                {type:'Cheese',price:2},
            ]
        },
        {   type:'dough-weight',
            icon:<Icon color={menuType === 'dough-weight' ? '#FFF' :'rgb(82, 81, 81)'} icon={PizzaWeight}/>,
            text:'Xəmir qalınlığı',
            pizzaWeight:[
                {type:'classic',price:0},
                {type:'thin',price:0},
                {type:'thready',price:0},
                {type:'dublex_chedar',price:4},
                {type:'dublex_mozarella',price:4},


            ]
        },
        {   type:'ingredients',
            icon:<Icon color={menuType === 'ingredients' ? '#FFF' :'rgb(82, 81, 81)'} icon={Ingredients}/>,
            text:'Ingredients',
            pizzaIngredients:[
                {
                    type:'tomato',
                    name:'Tomato',
                    icon:<Icon icon={Tomato}/>,
                    price:1
                },
                {
                    type:'paprika',
                    name:'Pepper',
                    icon:<Icon icon={Pepper}/>,
                    price:1
                },
                {
                    type:'onion',
                    name:'Onion',
                    icon:<Icon icon={Onion}/>,
                    price:1
                },
                {
                    type:'mush',
                    name:'Mushrooms',
                    icon:<Icon icon={Champignon}/>,
                    price:1
                },
                {
                    type:'olive',
                    name:'Olives Black',
                    icon:<Icon icon={OlivesBlack}/>,
                    price:1
                },
                {
                    type:'pepper',
                    name:'Chili Pepper',
                    icon:<Icon icon={Paprika}/>,
                    price:1
                },
                {
                    type:'sausage',
                    name:'Sausage',
                    icon:<Icon icon={Salami}/>,
                    price:3
                },
                {
                    type:'pineapple',
                    name:'Pineapple',
                    icon:<Icon icon={Pineapple}/>,
                    price:2
                },
                

            ]
        }
    ]

    const [oliveStatus,setOliveStatus] = useState(false);
    const [sausageStatus,setSausageStatus] = useState(false);
    const [onionStatus,setOnionStatus] = useState(false);
    const [tomatoStatus,setTomatoStatus] = useState(false);
    const [pepperStatus,setPepperStatus] = useState(false);
    const [paprikaStatus,setPaprikaStatus] = useState(false);
    const [mushStatus,setMushStatus] = useState(false);
    const [pineAppleStatus,setPineAppleStatus] = useState(false);
    const [order,setOrder] = useState(false);





    const selectSizeHandler = pizza =>{
        
        setMenuType(pizza.type);
        
    }
    const selectSize = pizza =>{
        setPizzaType({...pizza});
        setPizzaAnime(true);
        

        let p = pizza.slices/2;
        let d = 360/pizza.slices;

        let arr =[];
        let a =0;
        for(let i = 1;i<=p;i++){
            a+=d;
            arr.push(a)
        }

        setPizzaSliceArr(arr);

        // let filterIngr = totalPriceArr && totalPriceArr.filter(item=>{
        //     return item.type === pizza.type
        // })
        // if(filterIngr){

        //   let newPizzaArr =  totalPriceArr.filter(item=>{
        //       return item.type !== pizza.type;
        //   })
        //     setTotalPriceArr([totalPriceArr,pizza]);

        // }else{
        //     setTotalPriceArr([totalPriceArr,pizza]);

        // }

        
    }



   
    
    const selectDough = pizza =>{
        setPizzaBorder({...pizza});
        setPizzaAnime(true);

     
      


    }

    const selectDoughWeight = pizza =>{

        setPizzaWeight({...pizza});
        setPizzaAnime(true);

        
    }

    const selectIngredients = pizza =>{

        setPizzaIngredients(pizza.type);
        setPizzaAnime(true);
        let filterIngr = pizzaIngredientsArr.filter(item=>{
            return item.type === pizza.type
        })
        if(filterIngr.length > 0){
          let newPizzaArr =  pizzaIngredientsArr.filter(item=>{
              return item.type !== pizza.type;
          })

          setPizzaIngredientsArr([...newPizzaArr]);

          switch (pizza.type) {
            case 'olive':
                setOliveStatus(false)
                break;
            case 'sausage':
                setSausageStatus(false)

                break;
            case 'tomato':
                setTomatoStatus(false)

                break;
            case 'paprika':
                setPaprikaStatus(false)

                break;
            case 'pepper':
                setPepperStatus(false)

                break;   
            case 'onion':
                setOnionStatus(false)

                break;   
            case 'mush':
                setMushStatus(false)

                break;   
            case 'pineapple':
                setPineAppleStatus(false)
        
                break; 
        
            default:
                break;
        }

            
        }else{
            setPizzaIngredientsArr([...pizzaIngredientsArr,pizza]);
            
            switch (pizza.type) {
                case 'olive':
                    setOliveStatus(true)
                    break;
                case 'sausage':
                    setSausageStatus(true)
    
                    break;
                case 'tomato':
                    setTomatoStatus(true)
    
                    break;
                case 'paprika':
                    setPaprikaStatus(true)
    
                    break;
                case 'pepper':
                    setPepperStatus(true)
    
                    break;   
                case 'onion':
                    setOnionStatus(true)
    
                    break;   
                case 'mush':
                    setMushStatus(true)
    
                    break;   
                case 'pineapple':
                    setPineAppleStatus(true)
        
                    break; 
                default:
                    break;
            }

        }
      

        


    }


    const orderPizza = () =>{
       
        setOrder(true);
        setTimeout(() => {
            setPizzaDough(false)
        }, 400);

    }

    const border = {
        'Domato':PizzaTomato,
        'Barbeque':PizzaBarbeque,
        'Cheese':PizzaCheese
    };


    useEffect(()=>{
        
    let onion = document.querySelectorAll('[data-type = "onion"]');
    let mush = document.querySelectorAll('[data-type = "mush"]');
    let paprika = document.querySelectorAll('[data-type = "paprika"]');
    let pineapple = document.querySelectorAll('[data-type = "pineapple"]');
    let sausage = document.querySelectorAll('[data-type = "sausage"]');
    let olive = document.querySelectorAll('[data-type = "olive"]');
    let tomato = document.querySelectorAll('[data-type = "tomato"]');
    let pepper = document.querySelectorAll('[data-type = "pepper"]');






    olive.forEach((element,index)=>{
        
        let img = document.createElement('img');
        let style = getComputedStyle(element);
        img.src =Olive1;

       
        element.appendChild(img);
        
        
    })

    onion.forEach((element,index)=>{
        
        let img = document.createElement('img');
        // let style = getComputedStyle(element);
        img.src =Onion1;

       
        element.appendChild(img);

        
        
    })
    mush.forEach((element,index)=>{
        
        let img = document.createElement('img');
        // let style = getComputedStyle(element);
        img.src =Champignon;

       
        element.appendChild(img);

        
        
    })

    paprika.forEach((element,index)=>{
        
        let img = document.createElement('img');
        // let style = getComputedStyle(element);
        img.src =Paprika2;

       
        element.appendChild(img);

        
        
    })
    
    pineapple.forEach((element,index)=>{
        
        let img = document.createElement('img');
        // let style = getComputedStyle(element);
        img.src =Pineapple2;

       
        element.appendChild(img);

        
        
    })

    sausage.forEach((element,index)=>{
        
        let img = document.createElement('img');
        // let style = getComputedStyle(element);
        img.src =Sausage1;

       
        element.appendChild(img);

        
        
    })
    
    tomato.forEach((element,index)=>{
        
        let img = document.createElement('img');
        // let style = getComputedStyle(element);
        img.src =Domato1;

       
        element.appendChild(img);

        
        
    })
    
    pepper.forEach((element,index)=>{
        
        let img = document.createElement('img');
        // let style = getComputedStyle(element);
        img.src =Paprika1;

       
        element.appendChild(img);

        
        
    })
   
    },[]);
    
    
        let tp = 0;
        pizzaIngredientsArr.length > 0 && pizzaIngredientsArr.map(item=>{

            return {
                price:+item.price,
            }

        }).map(ni=>{
            
            let x = ni.price;
            return tp += x;
        });

        let ps= pizzaType && pizzaType.price;
        let pb= pizzaBorder && pizzaBorder.price;
        let pw= pizzaWeight && pizzaWeight.price;
        let tt = ps +pb +pw+tp;

    return(
      
        <div className={classes.MainContainer}>
            <div className={classes.IngredientsMenuR}>
                <div className={classes.IngredientsMenu}>
                    {pizzaList.map(item=>(

                   
                    <div onClick={()=>selectSizeHandler(item)}  className={menuType === item.type ? [classes.BtnPizza,classes.BtnActive].join(' '):classes.BtnPizza}>
                        <div className={classes.BtnImg}>
                        {item.icon}
                        </div>
                        <div className={classes.BtnText}>
                            {item.text}
                        </div>

                        {item.type === menuType &&
                            <div className={classes.AltMenu}>
                            {item.type === 'size' && item.pizzaSize && item.pizzaSize.map((pizza,i)=>(
                                
                                <div 
                                onClick={()=>selectSize(pizza)} 
                                key={i} 
                                style={{height:'10vh'}} 
                                className={pizzaType && pizzaType.type === pizza.type ? [classes.AltMenuList,classes.AltMenuListActive].join(' ') :classes.AltMenuList}>
                                    <span>Type: {pizza.type}</span>
                                    <span>Size: {pizza.size}</span>
                                    <span>Slice: {pizza.slices}</span>
                                    <span>Price: {pizza.price} AZN</span>



                                </div>
                            ))}

                            {item.type === 'dough' && item.pizzaBorder && item.pizzaBorder.map((pizza,i)=>(
                                
                                <div 
                                onClick={()=>selectDough(pizza)} 
                                key={i} 
                                style={{height:'5vh'}} 
                                className={pizzaBorder && pizzaBorder.type === pizza.type ? [classes.AltMenuList,classes.AltMenuListActive].join(' ') :classes.AltMenuList}>
                                    <span>Type: {pizza.type}</span>
                                    <span>price: {pizza.price} AZN</span>


                                </div>
                            ))}

                            {item.type === 'dough-weight' && item.pizzaWeight && item.pizzaWeight.map((pizza,i)=>(
                                
                                <div 
                                onClick={()=>selectDoughWeight(pizza)} 
                                key={i} 
                                style={{height:'5vh'}} 
                                className={pizzaWeight && pizzaWeight.type === pizza.type ? [classes.AltMenuList,classes.AltMenuListActive].join(' ') :classes.AltMenuList}>
                                    <span>Type: {pizza.type.replace(/_/g, ' ')}</span>
                                    <span>price: {pizza.price} AZN</span>


                                </div>
                            ))}

                            {item.type === 'ingredients' && item.pizzaIngredients && 
                            <div className={classes.IngridientParent}>
                            {item.pizzaIngredients.map((pizza,i)=>(
                                
                                <div 
                                onClick={()=>selectIngredients(pizza)} 
                                key={i} 
                                style={{height:'5vh'}} 
                                className={
                                    (pizzaIngredientsArr && pizzaIngredientsArr.findIndex(x=> x.type === pizza.type) > -1) ?
                                    // pizzaIngredients === pizza.type ? 
                                    [classes.Ingredient,classes.IngredientActive].join(' ') :
                                    classes.Ingredient

                                    }>
                                   
                                   <div className={classes.IngredientIcon}> {pizza.icon}</div>
                                   <div className={classes.IngredientIcon}> {pizza.name}</div>


                                </div>
                            ))
                            }
                            </div>
                            }
                        </div>
                        }

                    </div>
                         
                    ))}
                    

                </div>

            </div>
            <div className={classes.PizzaSection}>
                <Box order ={order} pizzaSize = {pizzaType}  pizzaBorder = {pizzaBorder}  pizzaWeight = {pizzaWeight} price={tt}/>
                <div className={classes.PizzaDoughParent}>
                {pizzaDough && <div 
                    className={pizzaAnime ? [classes.PizzaDough,classes.AnimePizza].join(' '):classes.PizzaDough}
                    onAnimationEnd={()=>setPizzaAnime(false)}
                    >
                        <div className={classes.PizzaCircle}>
                            {pizzaSliceArr && pizzaSliceArr.map((slice,i)=>(
                            
                                <div key={i} style={{transform:`rotate(${slice}deg)`}} className={classes.Line}>
                                
                                </div>

                            ))

                            }
                            <div data-type='pineapple' className={pineAppleStatus ?  [classes.Pineapple1,classes.pineActive].join(' ') : classes.Pineapple1}></div>
                            <div data-type='pineapple' className={pineAppleStatus ?  [classes.Pineapple2,classes.pineActive].join(' ') : classes.Pineapple2}></div>
                            <div data-type='pineapple' className={pineAppleStatus ?  [classes.Pineapple3,classes.pineActive].join(' ') : classes.Pineapple3}></div>
                            <div data-type='pineapple' className={pineAppleStatus ?  [classes.Pineapple4,classes.pineActive].join(' ') : classes.Pineapple4}></div>


                            <div className={classes.CircleInn}>
                                
                            <div className={[classes.Area,classes.Area1].join(' ')}>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>

                            </div>

                            <div className={[classes.Area,classes.Area2].join(' ')}>
                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='ingredient' className={classes.PizzaIngr}></div>
                                <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='ingredient' className={classes.PizzaIngr}></div>
                                <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='ingredient' className={classes.PizzaIngr}></div>
                                <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>

                           



                            </div>
                            <div className={[classes.Area,classes.Area3].join(' ')}>
                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='tomato' className={tomatoStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='mush' className={mushStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIng}></div>
                            <div data-type ='tomato' className={tomatoStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='mush' className={mushStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIng}></div>
                            <div data-type ='tomato' className={tomatoStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='mush' className={mushStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIng}></div>
                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>

                            </div>
                            <div className={[classes.Area,classes.Area4].join(' ')}>
                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='pepper' className={pepperStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='pepper' className={pepperStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>

                            </div>
                            <div className={[classes.Area,classes.Area5].join(' ')}>
                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='paprika' className={paprikaStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div  data-type ='onion' className={onionStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='paprika' className={paprikaStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div  data-type ='onion' className={onionStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='paprika' className={paprikaStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div  data-type ='onion' className={onionStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='paprika' className={paprikaStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                    <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                
                            </div>
                            <div className={[classes.Area,classes.Area6].join(' ')}>
                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='pepper' className={pepperStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='pepper' className={pepperStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            </div>
                            <div className={[classes.Area,classes.Area7].join(' ')}>

                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='tomato' className={tomatoStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='mush' className={mushStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIng}></div>
                            <div data-type ='tomato' className={tomatoStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='mush' className={mushStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIng}></div>
                            <div data-type ='tomato' className={tomatoStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='mush' className={mushStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIng}></div>
                            <div data-type ='tomato' className={tomatoStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>

                            </div>
                            <div className={[classes.Area,classes.Area8].join(' ')}>

                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='paprika' className={paprikaStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='pepper' className={pepperStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='paprika' className={paprikaStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='pepper' className={pepperStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='paprika' className={paprikaStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            
                            </div>

                            <div className={[classes.Area,classes.Area9].join(' ')}>

                            <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                            <div data-type ='tomato' className={tomatoStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                    <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                    <div data-type ='tomato' className={tomatoStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                    <div data-type ='olive' className={oliveStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                    <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                               

                                </div>
                                
                                <div className={[classes.Area,classes.Area10].join(' ')}>

                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                <div data-type ='sausage' className={sausageStatus ? [classes.PizzaIngr,classes.ActiveIng].join(' '):classes.PizzaIngr}></div>
                                    

                                </div>
                            </div>

                         
                            

                        </div>
                        <img src={pizzaBorder && pizzaBorder.type ? border[pizzaBorder.type] :PizzaDough} alt='pizza'/>
                        
                    </div>
                }
                
                    {/* {pizzaType && pizzaType.type && pizzaBorder && pizzaBorder.type && pizzaIngredients && pizzaWeight && pizzaWeight.type && */}
                     <div className={classes.OrderBtn}>
                        <button onClick={orderPizza}>Order</button>
                    </div>
                    {/* // } */}
                </div>
                
                        
            </div>


        </div>
    )
}

export default PizzaBuilder;