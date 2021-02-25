import PostInterface from '../types/Post';
import ID from '../types/ID';
import axios,{AxiosResponse} from 'axios';
import apiUrl from '../constants/api';

const getSinglePost = (id : ID) :  Promise<AxiosResponse<PostInterface>> => {
    return axios.get(`${apiUrl}/posts/${id}?_embed=comments`)
        .then(res => res.data);
}


export default getSinglePost;