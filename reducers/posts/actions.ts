import getPostsAPI from '../../api/getPosts';
import { AppThunk } from '../../types/AppThunk';
import PostInterface from '../../types/Post';
import { postsSetData,postsSetError } from './action-creators';

const getPosts: AppThunk = () => {
    return async (dispatch) => {
        try {
            //@ts-ignore
            const posts: PostInterface[] = await getPostsAPI();
            await dispatch(postsSetData(posts));
        } catch {
            await dispatch(postsSetError(true));
        }
    };
};

export { getPosts };
