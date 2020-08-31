import * as types from '../constants/actionTypes';

const initState = {
    profileData:{}
}

const profileReducer = ( state = initState, action ) => {
    switch(action.type) {
        case types.SET_PROFILE_DATA:
            console.log('SET_PROFILE_DATA',action.data)
            return {
                ...state,
                profileData:action.data
            }
        default: 
            return state
    }
}

export default profileReducer;