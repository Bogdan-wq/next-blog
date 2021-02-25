import axios,{AxiosResponse} from 'axios';
import PostInterface from '../types/Post';
import apiUrl from '../constants/api';

const createPostAPI = (body : PostInterface) : Promise<AxiosResponse<PostInterface>> => {
    return axios.post(`${apiUrl}/posts`,JSON.stringify(body),{
        headers:{
           'Content-Type':'application/json'
        }
    })
        .then(res => res.data)
}

export default createPostAPI;