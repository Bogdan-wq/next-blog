import { RootState } from "../rootReducer";

export const selectPosts = (s : RootState) => s.posts.data;

export const selectPostsError = (s : RootState) => s.posts.error;