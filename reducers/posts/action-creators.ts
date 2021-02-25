import PostInterface from '../../types/Post';
import { POSTS_SET_DATA,POSTS_ADD,POSTS_ERROR } from './action-types';

interface PostsSetDataAction {
    type:typeof POSTS_SET_DATA,
    payload:PostInterface[]
}

interface PostsAddAction {
    type:typeof POSTS_ADD,
    payload:PostInterface
}

interface PostsSetError {
    type:typeof POSTS_ERROR,
    payload:boolean,
}

const postsSetData = (payload : PostInterface[]) : PostsSetDataAction => {
    return {
        type:POSTS_SET_DATA,
        payload,
    }
}

const postsAddPost = (payload : PostInterface) : PostsAddAction => {
    return {
        type:POSTS_ADD,
        payload,
    }
}

const postsSetError = (payload : boolean) : PostsSetError => {
    return {
        type:POSTS_ERROR,
        payload,
    }
}

export {
    postsSetData,postsAddPost,postsSetError
}

export type PostsActions = PostsSetDataAction | PostsAddAction | PostsSetError;