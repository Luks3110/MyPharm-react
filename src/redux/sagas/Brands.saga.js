import { takeEvery, all, call, put, takeLeading } from 'redux-saga/effects';
import {
  GET_BRANDS,
  getBrandsSuccess,
  getBrandsFailed,
  ADD_BRAND,
  addBrandFailed,
  addBrandSuccess,
} from '../actions/Brands.actions.js';
import { addBrands, getBrands } from '../../utils/api';

function* getBrandsSaga() {
  try {
    const data = yield call(getBrands);
    console.log(data)
    yield put(getBrandsSuccess(data));
  } catch (error) {
    yield put(getBrandsFailed(error.message));
  }
}

function* getBrandsWatcher() {
  yield takeEvery(GET_BRANDS, getBrandsSaga);
}

function* addBrandSaga(action) {
  try {
    const data = yield call(addBrands, action.payload);
    yield put(addBrandSuccess({ ...action.payload, ...data }));
  } catch (error) {
    yield put(addBrandFailed(error.message));
  }
}

function* addBrandWatcher() {
  yield takeLeading(ADD_BRAND, addBrandSaga);
}

export default function* brandsSaga() {
  yield all([getBrandsWatcher(), addBrandWatcher()]);
}