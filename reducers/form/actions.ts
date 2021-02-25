import { formSetLoading } from './../../reducers/form/action-creators';
import { postsAddPost } from './../../reducers/posts/action-creators';
import createPostAPI from '../../api/createPost';
import { AppThunk } from '../../types/AppThunk';
import PostInterface from '../../types/Post';

const submitNewPost = (onLoad: () => void): AppThunk => (dispatch, getState) => {
    dispatch(formSetLoading(true));
    createPostAPI(getState().form.inputs)
        .then((res) => {
            onLoad();
            dispatch(postsAddPost((res as unknown) as PostInterface));
        })
        .finally(() => dispatch(formSetLoading(false)));
};

export default submitNewPost;
