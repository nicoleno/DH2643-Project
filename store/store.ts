
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

// export default createStore(reducers, applyMiddleware(thunk));

export default configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thunk)
})
