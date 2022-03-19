import {
  combineReducers
} from 'redux';
import products from '../reducers/Products.reducer';
import categories from '../reducers/Categories.reducer'
import brands from '../reducers/Brands.reducer'
import auth from '../reducers/Auth.reducer'
export default combineReducers({
  products,
  categories,
  brands,
  auth
});