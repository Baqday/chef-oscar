import * as actionTypes from './actionTypes';


export const addActiveRestaurantData =(data)=>{

    return{
        type:actionTypes.ADD_RESTAURANT_DATA,
        restaurant:data
    };

}

export const addDataLoader =(status)=>{

    return{
        type:actionTypes.ADD_DATA_LOADER,
        dataLoaded:status
    };

}

export const addDataSave =(data)=>{

    return{
        type:actionTypes.ADD_RESTAURANTS_DATA,
        restaurants:data
    };

}

export const addCategorySave =(data)=>{

    return{
        type:actionTypes.ADD_CATEGORY_DATA,
        category:data
    };

}

export const addDistance =(data)=>{

    return{
        type:actionTypes.ADD_DISTANCE,
        distances:data
    };

}







// export const addRestaurantData=(id)=>{

//     return{
//         type:actionTypes.ADD_RESTAURANT_ID,
//         restaurantID:id
//     };

// }

