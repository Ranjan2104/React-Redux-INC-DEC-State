import { legacy_createStore as createstore } from 'redux';
import rootReducer from './Reducers/index';

const store = createstore(rootReducer); 

export default store