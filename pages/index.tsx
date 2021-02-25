import Head from 'next/head';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import Post from '../components/Post';
import Container from '../components/Container';
import MainLayout from '../components/MainLayout';
import Error from '../components/Error';
import { wrapper } from '../store';
import { RootState } from '../reducers/rootReducer';
import getPostsAPI from '../api/getPosts';
import { postsSetData, postsSetError } from '../reducers/posts/action-creators';
import { selectPosts, selectPostsError } from '../reducers/posts/selectors';
import PostInterface from '../types/Post';

const Home: NextPage<RootState> = () => {
    const posts: PostInterface[] = useSelector(selectPosts);
    const error: boolean = useSelector(selectPostsError);

    return (
        <MainLayout>
            <Head>
                <title>Home Page</title>
            </Head>
            <Container>
                {error && <Error />}
                {posts && posts.map((post) => <Post {...post} key={post.id} />)}
            </Container>
        </MainLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    if (!store.getState().posts.data) {
        try {
            //@ts-ignore
            const posts: PostInterface[] = await getPostsAPI();
            await store.dispatch(postsSetData(posts));
        } catch {
            await store.dispatch(postsSetError(true));
        }
    }

    return {
        props: {},
    };
});

export default Home;
