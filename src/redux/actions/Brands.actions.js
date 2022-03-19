export const GET_BRANDS = 'GET_BRANDS';
export const GET_BRANDS_SUCCESS = 'GET_BRANDS_SUCCESS';
export const GET_BRANDS_FAILED = 'GET_BRANDS_FAILED';

export const ADD_BRAND = 'ADD_BRAND';
export const ADD_BRAND_SUCCESS = 'ADD_BRAND_SUCCESS';
export const ADD_BRAND_FAILED = 'ADD_BRAND_FAILED';

export const UPDATE_BRAND = 'UPDATE_BRAND';
export const UPDATE_BRAND_SUCCESS = 'UPDATE_BRAND_SUCCESS';
export const UPDATE_BRAND_FAILED = 'UPDATE_BRAND_FAILED';

export const getBrands = (payload) => ({
    type: GET_BRANDS,
    payload,
});

export const getBrandsSuccess = (payload) => ({
    type: GET_BRANDS_SUCCESS,
    payload,
});

export const getBrandsFailed = (payload) => ({
    type: GET_BRANDS_FAILED,
    payload,
});

export const addBrand = (payload) => ({
    type: ADD_BRAND,
    payload,
});

export const addBrandSuccess = (payload) => ({
    type: ADD_BRAND_SUCCESS,
    payload,
});

export const addBrandFailed = (payload) => ({
    type: ADD_BRAND_FAILED,
    payload,
});

export const updateBrand = (payload) => ({
    type: UPDATE_BRAND,
    payload,
});

export const updateBrandSuccess = (payload) => ({
    type: UPDATE_BRAND_SUCCESS,
    payload,
});

export const updateBrandFailed = (payload) => ({
    type: UPDATE_BRAND_FAILED,
    payload,
});