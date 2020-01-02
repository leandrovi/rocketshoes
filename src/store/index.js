import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer); // need to pass some data structure

export default store;
