import {
    ADD_CATEGORY,
    ADD_CATEGORY_FAILED,
    ADD_CATEGORY_SUCCESS,
    GET_CATEGORIES,
    GET_CATEGORIES_FAILED,
    GET_CATEGORIES_SUCCESS,
} from '../actions/Categories.actions';

const initialState = {
    isLoading: true,
    categories: [],
    error: null,
};

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case GET_CATEGORIES:
        case ADD_CATEGORY:
            return {
                ...state, isLoading: true
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                    isLoading: false,
            };
        case GET_CATEGORIES_FAILED:
        case ADD_CATEGORY_FAILED:
            return {
                ...state,
                error: payload,
                    isLoading: false,
            };
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                    categories: [...state.categories, payload],
            };
        default:
            return state;
    }
};