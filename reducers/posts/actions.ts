import getPostsAPI from '../../api/getPosts';
import { AppThunk } from '../../types/AppThunk';
import PostInterface from '../../types/Post';
import { postsSetData } from './action-creators';

const getPosts: AppThunk = () => {
    return async (dispatch) => {
        //@ts-ignore
        const posts: PostInterface[] = await getPostsAPI();
        await dispatch(postsSetData(posts));
    };
};

export { getPosts };
