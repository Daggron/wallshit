import Axios from 'axios';
const ApiKey = process.env.REACT_APP_ApiKey;



export const  FetchImages = (query,page) => 
   Axios.get(`https://api.unsplash.com/search/?query=${query}&page=${page}&client_id=${ApiKey}`)
   .then(res=>{return res.data})
   .catch(err=>console.log(err));
