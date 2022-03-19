import { takeEvery, all, call, put, takeLeading } from 'redux-saga/effects';
import {
  GET_PRODUCTS,
  getProductsSuccess,
  getProductsFailed,
  ADD_PRODUCT,
  addProductFailed,
  addProductSuccess,
} from '../actions/Products.actions.js';
import { getProducts, addProduct } from '../../utils/api';

function* getProductsSaga() {
  try {
    const data = yield call(getProducts);
    console.log(data)
    yield put(getProductsSuccess(data));
  } catch (error) {
    yield put(getProductsFailed(error.message));
  }
}

function* getProductsWatcher() {
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
}

function* addProductSaga(action) {
  try {
    const data = yield call(addProduct, action.payload);
    yield put(addProductSuccess({ ...action.payload, ...data }));
  } catch (error) {
    yield put(addProductFailed(error.message));
  }
}

function* addProductWatcher() {
  yield takeLeading(ADD_PRODUCT, addProductSaga);
}

export default function* productsSaga() {
  yield all([getProductsWatcher(), addProductWatcher()]);
}