import { RootState } from './../reducers/rootReducer';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>