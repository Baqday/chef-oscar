import * as actionTypes from '../actions/actionTypes';


const initialState ={
    restaurant:null,
    dataLoaded:false,
    restaurants:null,
    category:null,
    distances:null
}




const reducer  =(state = initialState,action)=>{


    switch(action.type){

        case actionTypes.ADD_RESTAURANT_DATA:

            return {
                ...state,
                restaurant:action.restaurant

            }
        case actionTypes.ADD_DATA_LOADER:

            return {
                ...state,
                dataLoaded:action.dataLoaded

            }
        case actionTypes.ADD_RESTAURANTS_DATA:

            return {
                ...state,
                restaurants:action.restaurants
    
            }
        case actionTypes.ADD_CATEGORY_DATA:

            return {
                ...state,
                category:action.category
        
            }
        case actionTypes.ADD_DISTANCE:

            return {
                ...state,
                distances:action.distances
            
            }
                     
        default:

        return state
    
    }

}

export default reducer;