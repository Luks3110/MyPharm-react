import { all } from 'redux-saga/effects';
import productsSaga from '../sagas/Products.saga';
import categorySaga from '../sagas/Categories.saga';
import brandsSaga from '../sagas/Brands.saga';
import authSaga from '../sagas/Auth.saga';

export default function* () {
  yield all([
      productsSaga(),
      categorySaga(),
      brandsSaga(),
      authSaga()
  ]);
}