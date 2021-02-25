import { combineReducers } from 'redux';
import postsReducer from './posts/postsReducer';
import formReducer from './form/formReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    form: formReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
