import { GET_TOPICS, UPDATE_UPVOTE, UPDATE_DOWNVOTE } from './actionTypes';
import data from '../backend/data.json';

export const getTopics = () => async dispatch => {
    // const res = await Axios.get('../public/manifest.json');
    dispatch({
        type: GET_TOPICS,
        payload: data
    });
};
export const updateUpvote = id => async dispatch => {
    dispatch({
        type: UPDATE_UPVOTE,
        payload: id
    });
};
export const updateDownvote = id => async dispatch => {
    dispatch({
        type: UPDATE_DOWNVOTE,
        payload: id
    });
};
