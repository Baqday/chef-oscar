import React,{useState,useEffect,useRef} from 'react';

import {connect} from 'react-redux';
import * as userActions from '../../store/actions/index';

import axios from 'axios';
import store from 'store';
import Spinner from '../../components/UI/Spinner/Spinner';
import SpinnerFood from '../../components/UI/Spinner/SpinnerFood';

import Icon from '../../components/Icon/Icon';

import classes from './Restaurant.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Footer from '../../components/Footer/Footer';




// ReactDOM.findDOMNode()


const Restaurant = props=>{


        const [restaurant,setRestaurant] = useState([]);
        const [spinner,setSpinner] = useState(false);
        const [spinnerFood,setSpinnerFood] = useState(false);

        const [fixedHeader,setFixedHeader] = useState(false);
        const [selectedCategory,setSelectedCategory] =useState(null);

        const [activeMenuCategory,setActiveMenuCategory] = useState([]);
        const [selectItem,setSelectItem] = useState(null);

        const [currentCount,setCurrentCount] = useState(0);
        const [cart,setCart] = useState([]);

        const [tabSide,setTabSide] = useState('bag');
        const [searchResult,setSearchResult] = useState([]);










        useEffect(()=>{
            setSpinner(true);
            if(props.activeRestaurant){
                store.set('activeRestaurant', { restaurant:props.activeRestaurant})
            }
            const id =props.activeRestaurant && props.activeRestaurant._id ? props.activeRestaurant._id : ((store.get('activeRestaurant') && store.get('activeRestaurant').restaurant) ? store.get('activeRestaurant').restaurant._id :null);
    
    
            const currentRestaurant = {
                query: `
                    query {
                      restaurant(id:"${id}"){
                          _id
                          name
                          address
                          place_id
                          photo
                          lat
                          lng
                          rating
                          category{
                              name
                              key
                          }
                          menu{
                              _id
                              name
                              description
                              price
                              photo
                              type
                          }
                          work_time{
                              open
                              close
                          }
                      }
                    }
                  `
              };
           
             axios.post('http://localhost:5000/graphql', currentRestaurant)
    
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed!');
                }
            
                setRestaurant({...res.data.data.restaurant});
                props.onRestaurantSelected({...res.data.data.restaurant})
                setSpinner(false);

            })
            .catch(err => {
            console.log(err);
            });

            
            

        },[])




        useEffect(()=>{

              
                window.addEventListener('scroll',HandleScroll,true);
                if(window.pageYOffset > 150){

                }else{
    
                }
            

        },[])

        const MenuHeader = useRef();

        

        const HandleScroll = event=>{
            if(MenuHeader && MenuHeader.current && MenuHeader.current.parentNode){

                let element = MenuHeader.current.parentNode.offsetTop;
                let windowOffset =window.pageYOffset;
                if(windowOffset >= element){
                    setFixedHeader(true)
                }else{
                    setFixedHeader(false)

                }

            }

            if(window.pageYOffset > 150){
            }else{

            }

        }

        const BackToTop = event=>{
            window.scroll(0,0);
        }


        useEffect(()=>{

            const restaurant = props.activeRestaurant ? props.activeRestaurant : (store.get('activeRestaurant') ? store.get('activeRestaurant').restaurant :null);

            let activeCategory = restaurant.category[0]
            setSelectedCategory(activeCategory);

            let activeMenu = restaurant.menu.filter(item=>{

                return item.type === activeCategory.key;
            });

            setActiveMenuCategory(activeMenu);
            window.scroll(0,0);

        },[]);
        

        const selectCategory = category =>{

            setSpinnerFood(true);
            setSelectedCategory(category);

            if(MenuHeader && MenuHeader.current && MenuHeader.current.parentNode){

                let element = MenuHeader.current.parentNode.offsetTop;
                window.scroll(0,+element);
               
            }

            const restaurant = props.activeRestaurant ? props.activeRestaurant : (store.get('activeRestaurant') ? store.get('activeRestaurant').restaurant :null);

            let activeMenu = restaurant.menu.filter(item=>{

                return item.type === category.key;
            });

            setActiveMenuCategory(activeMenu);
            setSpinnerFood(false);
            
         



        }

        const selectItemHandler = e =>{
                const itemId = e._id;
                const itemTitle = e.name;
                const itemPhoto = e.photo;
                const itemPrice = e.price;
                const itemType = e.type;



                 setSelectItem(itemId);
            
                let item = {id:itemId,type:itemType,title:itemTitle,photo:itemPhoto,price:itemPrice,quantity:1};

                const existsItem = cart.filter(item=>{

                    return item.id === itemId;
                });
                if(existsItem && existsItem.length > 0){
                
                    let id = itemId;
                    let quantity =existsItem[0].quantity++;
                    let updatedItem = {id:id,quantity:quantity};
                    setCurrentCount(updatedItem.quantity)
                    cart.filter(i=>{
                        return i.id === id;
                    }).map(m=>{

                        return {
                            ...m,
                            ...updatedItem
                        }
                        
                    })


                }else if(existsItem.length  === 0){
                    setCart([...cart,item]);

                }else{
                    setCart([...cart,item]);
                }
                
               let qnt = existsItem[0] ? existsItem[0].quantity : 1;
               setCurrentCount(qnt)

               
               

        }

        



   


        const incrementHandler =event =>{

            let item = {id:event,quantity:1};

                const existsItem = cart.filter(item=>{

                    return item.id === event;
                });
                if(existsItem && existsItem.length > 0){
                    let id = event;
                    let quantity =existsItem[0].quantity++;
                    let updatedItem = {id:id,quantity:quantity};
                    cart.filter(i=>{
                        return i.id === id;
                    }).map(m=>{

                        return {
                            ...m,
                            ...updatedItem
                        }
                    })
                    // cart.map(item=>{

                    //     return {...updatedItem}
                    // })
                    setCurrentCount(currentCount + 1);


                }else if(existsItem.length  === 0){
                    setCart([...cart,item]);



                }else{
                    setCart([...cart,item]);

                }

                
        }

        const decrementHandler =event =>{
            
            let item = {id:event,quantity:1};

                const existsItem = cart.filter(item=>{

                    return item.id === event;
                });
                if(existsItem && existsItem.length > 0){
                    let id = event;
                    let quantity =existsItem[0].quantity--;
                    let updatedItem = {id:id,quantity:quantity};
                    cart.filter(i=>{
                        return i.id === id;
                    }).map(m=>{

                        return {
                            ...m,
                            ...updatedItem
                        }
                    })
                    // cart.map(item=>{

                    //     return {...updatedItem}
                    // })
                    setCurrentCount(currentCount - 1);


                }else if(existsItem.length  === 0){
                    setCart([...cart,item]);

                }else{
                    setCart([...cart,item]);

                }
                if(currentCount === 1){
                    setSelectItem(null);
                    let removedElement = cart.filter(item=>{
                        return item.id !== event
                    });
                    setCart([...removedElement]) 

                }
        }

        const deleteItem = id =>{
            setSelectItem(null);

            let removedElement = cart.filter(item=>{
                return item.id !== id
            });
            setCart([...removedElement])
        }

        
       

      

    

        const selectCartItemCategory = event =>{

                setSearchResult([]);

                const restaurant = props.activeRestaurant ? props.activeRestaurant : (store.get('activeRestaurant') ? store.get('activeRestaurant').restaurant :null);

                let activeMenu = restaurant.menu.filter(item=>{

                    return item.type === event.type;
                });

                let category = restaurant && restaurant.category.filter(item=>{

                    return item.key === event.type;
                });

                setSelectedCategory(...category);
                setActiveMenuCategory(activeMenu);


                
                           

                    let element = document.querySelectorAll('[data-id = "'+event.id+'"]');

                        if(element && element[0] && element[0].offsetTop){
                            window.scroll(0,+element[0].offsetTop+80);
                            
                        }     
             

                    
        }

        


        let tp = 0;
        cart.length > 0 && cart.map(item=>{

            return {
                price:+item.price,
                quantity:+item.quantity
            }

        }).map(ni=>{
            
            let x = ni.price * ni.quantity;
            return tp += x;
        });

        

        

        const searchFoodHandler = event =>{
            let word = event.currentTarget.value.toLowerCase();
            let resArr = [];

            if(word.length > 2){
                restaurant && restaurant.menu.filter(item=>{
                        item.name = item.name.toLowerCase();
                        let allResult =item.name.indexOf(word) > -1 ? item.name.indexOf(word) > -1 :null;
                        return  allResult;

                }).map(res=>{
                    res ={
                        ...res,
                        id:res._id
                    };
                    resArr.push(res);
                    return resArr;
                }).map(res2=>{
                    setSearchResult([...res2])
                })
            }else{

              setSearchResult([])

            }


        }

        console.log(searchResult)

        
        
        const activeTab = tab=>{

            setTabSide(tab);
        }
        

        const loader =spinner && <Spinner/>;
        const loaderFood = selectedCategory && spinnerFood && <SpinnerFood iconKeys={selectedCategory}/>
        
        // const {string} = props.match.params;
        // const activeID = props.activeID;
        
        let MenuHeaderClass =fixedHeader ? [classes.MenuHeader,classes.MenuHeaderFixed].join(' ') :[classes.MenuHeader,classes.MenuHeaderRelative].join(' ');
        let CartClass =fixedHeader ? [classes.Cart,classes.FixedCart].join(' ') :[classes.Cart,classes.RCart].join(' ');

        return(
                <React.Fragment>
                        
                    {loader}
                   
                        {/* <TopNav/> */}
 
                        <div id='restaurant' className={classes.Cover}>
                            <div className={classes.CoverLayer}>
                                <div className={classes.ResName}>{restaurant.name}</div>
                                <div className={classes.ResAddress}>{restaurant.address}</div>

                                <div className={classes.FoodSearch}>
                                    <input onKeyUp={searchFoodHandler} type='text' name='food-search'/>
                                    {searchResult.length >0 && <div className={classes.FoodSearchResult}>
                                        {searchResult.length > 0 && searchResult.map(item=>(

                                             <div 
                                                onClick={()=>selectCartItemCategory(item)} 
                                                className={classes.SearchResultItem}>
                                                 <div className={classes.SRIInfo}>{item.name}</div>
                                                 <div className={classes.SRIPhoto}><img src={'http://localhost:5000/uploads/'+item.photo} alt={item.name} /></div>

                                                 </div>
                                        ))}
                                    </div>
                                    }
                                </div>
                                <div className={classes.CategoryList}>
                                    {restaurant && restaurant.category && restaurant.category.map(item=>(

                                    <div className={classes.CategoryListItem}>{item.name.replace(/-/g, ' ')}</div>

                                    ))

                                    }
                                </div>

                                {/* style={{width:`calc(100% / ${restaurant && restaurant.category && restaurant.category.length})`}} */}
                                
                            </div>
                            <img className={classes.CoverImg} src={ restaurant.photo && 'http://localhost:5000/uploads/'+restaurant.photo} alt={restaurant.name} />
                        </div>
                        <div className={classes.MainContent}>
                        <div ref={MenuHeader}  className={classes.MenuSection}>
    
                            <div className={MenuHeaderClass}>
                               {restaurant && restaurant.category && restaurant.category.map((category,i)=>(

                                <div 
                                    onClick={()=>selectCategory({name:category.name,key:category.key})}
                                    key={i} 
                                    style={{width:`calc(100% / ${restaurant.category.length})`}} 
                                    className={(selectedCategory && selectedCategory.key) && category.key === selectedCategory.key ? [classes.MenuCategoryItem,classes.ActiveCategory].join(' ') : classes.MenuCategoryItem}>
                                         <Icon iconKeys ={category}/>
                                        <span className={classes.CategoryName}>{category.name.replace(/-/g, ' ')}</span>
                                    </div>

                               ))}

                            </div>
                                <div className={classes.MenuSectionContent}>
                                    
                                    {loaderFood}
                                    {
                                      activeMenuCategory && activeMenuCategory.map((item,i)=>(
                                          <div key={i}  data-id={item._id}  className={classes.MenuItem}>
                                              <div className={classes.CoverMenuItem}>
                                                  <img src={'http://localhost:5000/uploads/'+item.photo} alt={item.name}/>
                                                  <div className={
                                                        cart.filter(i=>{
                                                        return i.id === item._id
                                                        })[0] ?
                                                       [classes.Xcount,classes.XcountShow].join(' ')
                                                        : [classes.Xcount,classes.XcountHide].join(' ')
                                                        }>
                                                        <span className={classes.XcountX}>x</span>
                                                        <span className={classes.XcountN}>
                                                            {
                                                            cart && cart.length > 0 && cart.filter(i=>{
                                                                 return i.id === item._id
                                                            }).map(m=>{
                                                                 return  m.quantity
                                                            })

                                                            }
                                                            </span>
                                                      </div>
                                              </div>
                                              <div className={classes.InfoMenuItem}>
                                                  <div className={classes.MenuTitle}>{item.name}</div>
                                                  <div className={classes.MenuDescription}>{item.description}</div>
                                                  <div className={classes.MenuPrice}>{item.price}</div>

                                                  <div 
                                                  className={selectItem === item._id ? 
                                                  [classes.SelectItem,classes.ActiveSelectItem].join(' '):
                                                  [classes.SelectItem,classes.DeactiveSelectItem].join(' ')}>
                                                      <div 
                                                      onClick={()=>selectItemHandler(item)}
                                                       className={classes.ItemIcon}>
                                                           <FontAwesomeIcon icon={'plus'} />
                                                           </div>
                                                      <div onClick={()=>decrementHandler(item._id)} className={classes.Dec}>
                                                            <span><FontAwesomeIcon icon='minus'/></span>
                                                      </div>
                                                        <div  className={classes.Counter}>{

                                                            currentCount
                                                        // cart && cart.length > 0 && cart.filter(i=>{
                                                        //     return i.id === item._id
                                                        // }).map(m=>{
                                                        //     return  m.quantity
                                                        // })

                                                        
                                                        }</div>
                                                      <div onClick={()=>incrementHandler(item._id)} className={classes.Inc}>
                                                          <span><FontAwesomeIcon icon='plus'/></span>
                                                      </div>

                                                  </div>

                                              </div>
                                          </div>
                                      ))
                                    }

                                </div>
            
                        </div>
                            <div className={classes.HiddenCart}>
                                <div className={CartClass}>
                                    <div className={classes.CartHeader}>
                                        <div 
                                        onClick={()=>activeTab('bag')} 
                                        className={
                                           tabSide === 'bag' ? [classes.CartHeaderTab,classes.ActiveTab].join(' ') : classes.CartHeaderTab
                                        }
                                        >
                                        <span className={
                                        cart.length ? 
                                        [classes.FoodCount,classes.CountAnime].join(' ') 
                                        :classes.FoodCount}>
                                            {cart.length === 0 ? null : cart.length}
                                        </span>
                                        <Icon iconKeys={{key:'bag'}}/>
                                        </div>
                                        <div 
                                        onClick={()=>activeTab('map')} 
                                        className={
                                            tabSide === 'map' ? [classes.CartHeaderTab,classes.ActiveTab].join(' ') : classes.CartHeaderTab
                                         }
                                        ></div>
                                        <div  
                                        onClick={()=>activeTab('info')}
                                        className={
                                            tabSide === 'info' ? [classes.CartHeaderTab,classes.ActiveTab].join(' ') : classes.CartHeaderTab
                                         }
                                         ></div>

                                    </div>

                                   { tabSide === 'bag' && <div className={classes.CartContent}>
                                        {cart.length === 0
                                            ?
                                            <div className={classes.EmptyCart}>Səbətiniz Boşdur</div>
                                            :
                                            cart.map((item,i)=>(

                                                <div key={i} className={classes.CartItem}>
                                                
                                                <div 
                                                onClick={
                                                    ()=>selectCartItemCategory(item)
                                                } 

                                                
                                                className={classes.CartItemInfo}>
                                                    <div className={classes.CartItemInfoTitle}>
                                                        {item.title}
                                                    </div>
                                                    <div className={classes.CartItemInfoPrice}>
                                                        {/* <div className={classes.CartItemCount}>
                                                        {item.quantity}
                                                        </div>
                                                        <div className={classes.CartItemPrice}>
                                                        {item.price}
                                                        </div> */}
                                                        <table width='100%' cellPadding='0' cellSpacing='0'>
                                                            <thead>
                                                            <tr className={classes.TrH}>
                                                                <td>Price</td>
                                                                <td>Count</td>
                                                                <td>Total(AZN)</td>

                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr className={classes.TrB}>
                                                                <td>{item.price}</td>
                                                                <td>x{item.quantity}</td>
                                                                <td>{(+item.price*item.quantity).toFixed(2)}</td>

                                                            </tr>
                                                            </tbody>

                                                        </table>

                                                        

                                                    </div>
                                                </div>
                                                <div className={classes.CartItemPhoto}>
                                                    <img src={'http://localhost:5000/uploads/'+item.photo} alt={item.name}/>
                                                    <div onClick={()=>{deleteItem(item.id)}} className={classes.DeleteCartItem}>
                                                        <FontAwesomeIcon icon='times' />
                                                    </div>
                                                </div>
                                            </div>
                                            ))
                                        }
                                       {cart.length > 0 &&
                                            <div className={classes.CardFixedFooter}>
                                                <div className={classes.TotalPrice}>Total: {tp.toFixed(2)} AZN</div>
                                                <button className={classes.OrderBtn}>Order</button>
                                            </div>
                                       }
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                       
                        <div onClick={BackToTop} className={classes.BackToTop}><FontAwesomeIcon icon='chevron-up'/></div>
                    <Footer/>
                </React.Fragment>
        );
    }

const mapStateToProps = state =>{

    return{
        
        activeRestaurant:state.restaurant
        
    }
}
const mapDispatchToProps = dispatch =>{

    return{
        onRestaurantSelected:(data)=>dispatch(userActions.addActiveRestaurantData(data)),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Restaurant);