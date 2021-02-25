import { RootState } from "../rootReducer";

export const selectFormTitle = (s : RootState) => s.form.inputs.title;

export const selectFormBody = (s : RootState) => s.form.inputs.body;

export const selectFormLoading = (s : RootState) => s.form.loading;