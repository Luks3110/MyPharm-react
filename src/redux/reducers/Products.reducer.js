import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
} from '../actions/Products.actions';

const initialState = {
  isLoading: true,
  products: [],
  error: null,
};

export default (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case GET_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state, isLoading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
          isLoading: false,
      };
    case GET_PRODUCTS_FAILED:
    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
          isLoading: false,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
          products: [...state.products, payload],
      };
    default:
      return state;
  }
};