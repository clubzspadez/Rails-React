import { GET_ARTICLES , CREATE_ARTICLE, GET_ARTICLE, DELETE_ARTICLE} from './types';
import  axios from 'axios'

const API_URL = 'http://localhost:5000/api/v1';



export function getArticles() {
    const request = new Promise((resolve, reject) => {
        axios.get(`${API_URL}/articles`).then(response => resolve(response.data))
    });
    
        return {
        type: GET_ARTICLES,
        payload: request
    }
}

export function createArticle(props) {
        console.log(props)
       return axios.post(`${API_URL}/articles`, props)
        .then(response => {
            console.log(response);
            return JSON.stringify(response.data);
        })
        // console.log(props);

        // axios({
        //     method: 'post',
        //     url:`${API_URL}/articles`,
        //     data: {
        //       title: 'Fred',
        //       description: 'Flintstone',
        //       author:'Test'
        //     }
        //   });
}

  
  export function deleteArticle(id){
    const request = axios.delete(`${API_URL}/articles/${id}`);
  
    return{
      type: DELETE_ARTICLE,
      payload: request
    }; 
  }
  
  export function getArticle(id){
    const request =  new Promise((resolve, reject) => {
        return axios.get(`${API_URL}/articles/${id}`).then(response => {
            resolve((response.data))});
        });
    return{
      type: GET_ARTICLE,
      payload: request
    }; 
  }
  
