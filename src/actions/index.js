import {
    GET_TOPICS,
    UPDATE_UPVOTE,
    UPDATE_DOWNVOTE,
    ADD_TOPIC
} from './actionTypes';
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

export const addTopic = topicText => async dispatch => {
    dispatch({
        type: ADD_TOPIC,
        payload: topicText
    });
};
