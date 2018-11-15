import {
    GET_TOPICS,
    UPDATE_UPVOTE,
    UPDATE_DOWNVOTE
} from '../actions/actionTypes';

const initialState = { topics: [] };

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TOPICS:
            return { ...state, topics: action.payload };
        case UPDATE_UPVOTE:
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic.id === action.payload) {
                        topic.upVotes += 1;
                    }
                    return topic;
                })
            };

        case UPDATE_DOWNVOTE:
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic.id === action.payload) {
                        topic.downVotes += 1;
                    }
                    return topic;
                })
            };

        default:
            return state;
    }
}
