import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import rootReducer, { RootState } from './reducers/rootReducer';

const makeStore: MakeStore<RootState> = () =>
    createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const wrapper = createWrapper<RootState>(makeStore);
