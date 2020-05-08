import React from 'react';
import TopNav from '../../components/Nav/TopNav';
import Header from '../../components/Header/Header';
import ListRestaurants  from '../../components/Restaurant/List/List';
import Builder  from '../../components/Builder/Builder';
import Footer  from '../../components/Footer/Footer';




const Layout = (props) =>{
    console.log(props)
    return(
            <React.Fragment>
                <TopNav/>
                <Header/>
                <ListRestaurants/>
                <Builder/>
                <Footer/>


            </React.Fragment>
    );
}
export default Layout;