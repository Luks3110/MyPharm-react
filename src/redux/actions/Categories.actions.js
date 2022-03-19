export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILED = 'GET_CATEGORIES_FAILED';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAILED = 'ADD_CATEGORY_FAILED';

export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_CATEGORY_SUCCESS = 'UPDATE_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY_FAILED = 'UPDATE_CATEGORY_FAILED';

export const getCategories = (payload) => ({
    type: GET_CATEGORIES,
    payload,
});

export const getCategoriesSuccess = (payload) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload,
});

export const getCategoriesFailed = (payload) => ({
    type: GET_CATEGORIES_FAILED,
    payload,
});

export const addCategory = (payload) => ({
    type: ADD_CATEGORY,
    payload,
});

export const addCategorySuccess = (payload) => ({
    type: ADD_CATEGORY_SUCCESS,
    payload,
});

export const addCategoryFailed = (payload) => ({
    type: ADD_CATEGORY_FAILED,
    payload,
});

export const updateCategory = (payload) => ({
    type: UPDATE_CATEGORY,
    payload,
  });
  
  export const updateCategorySuccess = (payload) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload,
  });
  
  export const updateCategoryFailed = (payload) => ({
    type: UPDATE_CATEGORY_FAILED,
    payload,
  });