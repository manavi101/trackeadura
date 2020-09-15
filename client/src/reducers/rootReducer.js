import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import weaponsReducer from './weaponsReducer';

const rootReducer = combineReducers({
    profileReducer,weaponsReducer,
});

export default rootReducer;