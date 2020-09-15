import * as types from '../constants/actionTypes';

const initState = {
    weaponsData:{}
}

const weaponsReducer = ( state = initState, action ) => {
    switch(action.type) {
        case types.SET_WEAPONS_DATA:
            return {
                ...state,
                weaponsData:action.data
            }
        default: 
            return state
    }
}

export default weaponsReducer;