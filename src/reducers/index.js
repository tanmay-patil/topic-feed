import { combineReducers } from 'redux';
import topicsReducer from './topicsReducer';

export default combineReducers({
    topicsReducer: topicsReducer
});
