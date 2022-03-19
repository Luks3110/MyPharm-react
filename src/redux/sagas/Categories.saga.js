import { takeEvery, all, call, put, takeLeading } from 'redux-saga/effects';
import {
  GET_CATEGORIES,
  getCategoriesSuccess,
  getCategoriesFailed,
  ADD_CATEGORY,
  addCategoryFailed,
  addCategorySuccess,
} from '../actions/Categories.actions.js';
import { addCategories, getCategories } from '../../utils/api';

function* getCategoriesSaga() {
  try {
    const data = yield call(getCategories);
    console.log(data)
    yield put(getCategoriesSuccess(data));
  } catch (error) {
    yield put(getCategoriesFailed(error.message));
  }
}

function* getCategoriesWatcher() {
  yield takeEvery(GET_CATEGORIES, getCategoriesSaga);
}

function* addCategorySaga(action) {
  try {
    const data = yield call(addCategories, action.payload);
    yield put(addCategorySuccess({ ...action.payload, ...data }));
  } catch (error) {
    yield put(addCategoryFailed(error.message));
  }
}

function* addCategoryWatcher() {
  yield takeLeading(ADD_CATEGORY, addCategorySaga);
}

export default function* categoriesSaga() {
  yield all([getCategoriesWatcher(), addCategoryWatcher()]);
}