import { FormActions } from './action-creators';
import {HYDRATE} from 'next-redux-wrapper';

interface InitialState {
    inputs:{
        title:string;
        body:string;
    }
    loading:boolean;
}

const initialState : InitialState = {
    inputs:{
        title:'',
        body:''
    },
    loading:false
}

const formReducer = (state = initialState,action : FormActions) => {
    switch (action.type) {
        //@ts-ignore
        case HYDRATE: {
            //@ts-ignore
            return {...action.payload['form']};
        }
        case '@form/CHANGE_INPUT':{
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.payload.name]:action.payload.value
                }
            }
        }

        case '@form/SET_LOADING':{
            return {
                ...state,
                loading:action.payload
            }
        }

        default:{
            return state;
        }
    }
}

export default formReducer;