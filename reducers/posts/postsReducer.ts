import { PostsActions } from './action-creators';
import PostInterface from '../../types/Post';
import {HYDRATE} from 'next-redux-wrapper';

interface InitialState {
    data:PostInterface[] | null;
    error:boolean;
}

const initialState : InitialState = {
    data:null,
    error:false,
}


const postsReducer = (state = initialState,action : PostsActions) => {
    switch(action.type) {
        //@ts-ignore
        case HYDRATE: {
            //@ts-ignore
            return {...action.payload['posts']};
        }
        case '@posts/SET_DATA':{
            return {
                ...state,
                data:action.payload
            }
        }

        case '@posts/ADD_POST':{
            return {
                ...state,
                data:[action.payload,...state.data]
            }
        }

        case '@posts/SET_ERROR':{
            console.log({
                ...state,
                error:action.payload,
            })
            return {
                ...state,
                error:action.payload,
            }
        }

        default:{
            return state;
        }
    }
}

export default postsReducer;