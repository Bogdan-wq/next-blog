import styled from 'styled-components';
import PostInterface from '../types/Post';
import Link from 'next/link';

const PostWrapper = styled.div`
    padding: 15px;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    border: 1px solid lightgrey;
    &:not(:first-child) {
        margin-top: 15px;
    }
`;

const PostTitle = styled.h4`
    font-size: 25px;
`;

const PostBody = styled.div`
    font-size: 18px;
    margin-top: 15px;
`;

const Post = ({ title, body, id }: PostInterface) => {
    return (
        <Link href="/posts/[postId]" as={`/posts/${id}`}>
            <PostWrapper>
                <PostTitle>{title}</PostTitle>
                <PostBody>{body}</PostBody>
            </PostWrapper>
        </Link>
    );
};

export default Post;
