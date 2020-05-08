import React,{useState,useEffect} from 'react';
import classes from './TopNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../UI/Modal/Modal';
import UserModal from '../UI/Modal/User/Modal';
import {connect} from 'react-redux';
import store from 'store';

import GooglePlacesAutocomplete,{geocodeByAddress} from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/assets/index.css';




const TopNav = props=>{
    const [mapModal,setMapModal] = useState(false);
    const [userModal,setUserModal] = useState(false);

    const [userName,setUserName] = useState(null);
    const [userLocation,setUserLocation] = useState(null);
    const [activeUser,setActiveUser] = useState(null);







    const openAddressModal = event =>{

        setMapModal(true);
    }

    const closeBackdrop = () =>{
        setMapModal(false);
    }

    useEffect(()=>{

        window.onload  = activeUserModalHandler;
    },[]);

    const activeUserModalHandler = () =>{
        if(store.get('user') && store.get('user').info){
            setUserModal(false)
            let aUser = store.get('user') && store.get('user').info.name ? store.get('user').info.name : 'user';
            let aUserLocation = store.get('user') && store.get('user').info.location ? store.get('user').info.location.address_components[0].long_name+' '+store.get('user').info.location.address_components[1].long_name:null;
            setActiveUser(`${aUser} | ${aUserLocation}`)
        }else{
            setUserModal(true)

        }
    }

    const closeUserModal = () =>{
        setUserModal(false)
    }


   
    const userConfirmHandler = () =>{
            let location = store.get('user') && store.get('user').info.location ? store.get('user').info.location : null;
            let user = store.get('user') && store.get('user').info.name ? store.get('user').info.name : 'user';

            if(userName && userLocation){
                store.set('user', {info:{name:userName,location:userLocation}})
                setUserModal(false)
            }else if(userName && !userLocation){
                store.set('user', {info:{name:userName,location:location}})
                setUserModal(false)
            }else if(!userName && userLocation){
                store.set('user', {info:{name:user,location:userLocation}})
                setUserModal(false)
            }else{

                setUserModal(false)

            }
        
            window.location.reload()
    }

   
    
    return (
        <React.Fragment>
            {userModal && props.dataLoaded && 
                <UserModal closeBackdrop={closeUserModal} bgdark>
                        <div className={classes.UserName}>
                            <label>Adınız</label>
                            <input defaultValue={ store.get('user') && store.get('user') && store.get('user').info.name} onChange={(event)=>setUserName(event.currentTarget.value)} type='text' name='user-name' id='user-name' />
                        </div>
                        <div className={classes.SearchPlace}>
                        <div>
                                <label htmlFor='-google-places-autocomplete-input'>Ünvan (küçə)</label>
                                <GooglePlacesAutocomplete
                                initialValue={store.get('user') && store.get('user').info.location && store.get('user').info.location.formatted_address}
                                onSelect={({description})=>
                                    geocodeByAddress(description)
                                    .then(results => setUserLocation(results[0]))
                                    .catch(error => console.error(error))
                                }
                                autocompletionRequest={{
                                    componentRestrictions: {
                                    country: ['az'],
                                    }
                                }}
                                />
                        </div>
                        </div>
                        <div className={classes.Buttons}>
                            <button onClick={userConfirmHandler} className={classes.ConfirmBtn}>Təstiqlə</button>
                            <button onClick={closeUserModal} className={classes.AfterBtn}>Daha Sonra</button>
                        </div>
                </UserModal>}
            {mapModal  && <Modal closeBackdrop={closeBackdrop} bgdark>
                            <div className={classes.ModalContent}>
                                <div className={classes.ModalMap}>
                           
    
                                </div>
                                <div className={classes.ModalInfo}>
                                </div>

                            </div>
                      </Modal>
            }
        <div className={classes.Nav}>
            <div className={classes.NavLeft}>

            </div>
            <div className={classes.NavRight}>
                <div className={classes.UserLocation}>
                    <button onClick={()=>setUserModal(true)}>
                        {/* <FontAwesomeIcon icon='map-marker-alt' /> */}
                        {activeUser}</button>
                </div>
               

            </div>
                
        </div>
        </React.Fragment>
    )
}


const mapStateToProps = state =>{

    return{
        dataLoaded:state.dataLoaded
        
    }
}

export default connect(mapStateToProps,null)(TopNav);