import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Head from "next/head";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
import Container from "../../components/Container";
import PostInterface from '../../types/Post';
import getPostsAPI from "../../api/getPosts";
import {wrapper } from '../../store';
import { postsSetData } from "../../reducers/posts/action-creators";

const PostWrapper = styled.div`
  font-size:25px;
`

const PostLabel = styled.div`
  font-family:Roboto Light
`

const PostTitle = styled.div`
  display:flex;
`

const PostBody = styled.div`
  display:flex;
  margin-top:15px;
`

const PostComments = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:15px;
` 

const PostSingleComment = styled.div`
  &:not(:first-child) {
    margin-top:15px;
  }
`



export default function Post() {
  const router = useRouter();

  const post : PostInterface = useSelector(s => s.posts.data.find(post => 
    String(post.id) === String(router.query.postId)))

  return (
    <MainLayout>
      <Head>
        <title>Post {router.query.postId}</title>
      </Head>
      <Container>
        <PostWrapper>
          <PostTitle>
            <PostLabel>Title:</PostLabel>
            {post.title}
          </PostTitle>
          <PostBody>
            <PostLabel>Body:</PostLabel>
            <p>{post.body}</p>
          </PostBody>
          <PostComments>
            <PostLabel>Comments:</PostLabel>
            {post.comments?.length > 0 
              ? post.comments.map(comment => ( 
                <PostSingleComment key={comment.id}>
                  {comment.body}
                </PostSingleComment>
              )) 
              : <div>No comments</div>}
          </PostComments>
        </PostWrapper>
      </Container>
    </MainLayout>
  );
}


export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {

  if(!store.getState().posts.data) {
    //@ts-ignore
    const posts : PostInterface[] = await getPostsAPI();
    await store.dispatch(postsSetData(posts));
  }


  return {
    props: {},
  };
})
