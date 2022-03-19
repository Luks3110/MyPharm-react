import {
    ADD_BRAND,
    ADD_BRAND_FAILED,
    ADD_BRAND_SUCCESS,
    GET_BRANDS,
    GET_BRANDS_FAILED,
    GET_BRANDS_SUCCESS,
} from '../actions/Brands.actions';

const initialState = {
    isLoading: true,
    openModal: false,
    brands: [],
    error: null,
};

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case GET_BRANDS:
        case ADD_BRAND:
            return {
                ...state, isLoading: true
            };
        case GET_BRANDS_SUCCESS:
            return {
                ...state,
                brands: payload,
                    isLoading: false,
            };
        case GET_BRANDS_FAILED:
        case ADD_BRAND_FAILED:
            return {
                ...state,
                error: payload,
                    isLoading: false,
            };
        case ADD_BRAND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                    brands: [...state.brands, payload],
            };
        default:
            return state;
    }
};