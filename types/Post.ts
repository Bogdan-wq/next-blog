import ID from './ID';
import CommentInterface from './Comment';

export default interface PostInterface {
    title: string;
    body: string;
    id?: ID;
    comments?: CommentInterface[];
}
