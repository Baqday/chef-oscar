import React from 'react';
import './Layout.module.scss';
import MainPage from '../../pages/main/Main';
import RestaurantPage from '../../pages/restaurant/Restaurant';
import PizzaBuilder  from '../../pages/builder/pizza/Pizza';
import BurgerBuilder  from '../../pages/builder/burger/Burger';




import {Route,Switch} from 'react-router-dom';

const Layout = () =>{



    return(
       
            <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/restaurant/:string' exact component={RestaurantPage}/>
                    <Route path ='/burger-builder' exact component={BurgerBuilder} />
                    <Route path ='/pizza-builder' exact component={PizzaBuilder} />



            </Switch>

       
    );
}
export default Layout;