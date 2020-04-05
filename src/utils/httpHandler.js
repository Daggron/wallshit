import Axios from 'axios';
const ApiKey = process.env.REACT_APP_ApiKey;



export const  FetchImages = (query) => 
   Axios.get(`https://api.unsplash.com/search/?query=${query}&page=1&client_id=${ApiKey}`)
   .then(res=>{return res.data})
   .catch(err=>console.log(err));
