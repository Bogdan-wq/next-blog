import { FORM_CHANGE_INPUT, FORM_SET_LOADING } from './action-types';

interface FormChangeInputAction {
    type: typeof FORM_CHANGE_INPUT;
    payload: {
        name: string;
        value: string;
    };
}

interface FormSetLoadingAction {
    type: typeof FORM_SET_LOADING;
    payload: boolean;
}

export const formChangeInput = (payload: { name: string; value: string }): FormChangeInputAction => {
    return {
        type: FORM_CHANGE_INPUT,
        payload,
    };
};

export const formSetLoading = (payload: boolean): FormSetLoadingAction => {
    return {
        type: FORM_SET_LOADING,
        payload,
    };
};

export type FormActions = FormChangeInputAction | FormSetLoadingAction;
