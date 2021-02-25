import PostInterface from "../types/Post";
import axios,{AxiosResponse} from 'axios';
import apiUrl from '../constants/api';

 const getPostsAPI = () : Promise<AxiosResponse<PostInterface[]>> => {
    return axios.get(`${apiUrl}/postss`)
        .then(res => res.data)
 }

 export default getPostsAPI;