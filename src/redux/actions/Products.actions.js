export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILED = 'ADD_PRODUCT_FAILED';

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILED = 'UPDATE_PRODUCT_FAILED';

export const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailed = (payload) => ({
  type: GET_PRODUCTS_FAILED,
  payload,
});

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const addProductSuccess = (payload) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload,
});

export const addProductFailed = (payload) => ({
  type: ADD_PRODUCT_FAILED,
  payload,
});

export const updateProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload,
});

export const updateProductSuccess = (payload) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload,
});

export const updateProductFailed = (payload) => ({
  type: UPDATE_PRODUCT_FAILED,
  payload,
});