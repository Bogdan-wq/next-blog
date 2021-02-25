import Head from 'next/head';
import { useRouter } from 'next/router'
import { useSelector,useDispatch } from 'react-redux';
import styled from 'styled-components';
import Container from '../../components/Container';
import MainLayout from "../../components/MainLayout";
import createPostAPI from '../../api/createPost';
import Loading from '../../components/Loading';
import { formChangeInput,formSetLoading } from './../../reducers/form/action-creators';
import { postsAddPost } from './../../reducers/posts/action-creators';
import { AppThunk } from '../../types/AppThunk';
import PostInterface from '../../types/Post';
import submitNewPost from '../../reducers/form/actions';
import { selectFormBody, selectFormLoading, selectFormTitle } from '../../reducers/form/selectors';

const Form = styled.form`
  margin-top:25px;
  width:300px;
`

const FormTitle = styled.div`
  font-size:40px;
`

const FormControl = styled.div`
  display:flex;
  flex-direction:column;
  &:not(:first-child) {
    margin-top:15px;
  }
`

const FormLabel = styled.span`
  font-size:16px;
`

const FormInput = styled.input`
  height:35px;
  font-size:16px;
  border-radius:4px;
  border:1px solid darkgrey;
  margin-top:7px;
  padding-left:10px;
`

const FormSubmit = styled.button`
  padding:5px 20px;
  margin-top:20px;
  background-color:white;
  border:2px solid black;
  font-size:16px;
`


export default function New() {

  const titleValue = useSelector(selectFormTitle);
  const bodyValue = useSelector(selectFormBody)
  const loading = useSelector(selectFormLoading)
  const dispatch = useDispatch();

  const router = useRouter();

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(formChangeInput({
      name:e.target.name,
      value:e.target.value,
    }))
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const onLoad = () => {
      router.push('/')
    }
    dispatch(submitNewPost(onLoad))
  }

  return (
    <MainLayout>
      <Head>
        <title>Create new post</title>
      </Head>
        <Container>
          <FormTitle>Create new post</FormTitle>
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <FormInput required onChange={handleChange} name="title" value={titleValue}/>
            </FormControl>
            <FormControl>
              <FormLabel>Body</FormLabel>
              <FormInput required onChange={handleChange} name="body" value={bodyValue}/>
            </FormControl>
            <FormSubmit type="submit" disabled={loading}>
              Create
            </FormSubmit>
          </Form>
          {loading && <Loading />}
        </Container>
    </MainLayout>
  );
}
