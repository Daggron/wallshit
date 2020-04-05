import React, { useState, useEffect } from 'react';
import { FetchImages } from "../../utils/httpHandler";
import Shelf from '../Shelf/Shelf';
import '../../App.css'

const Home = () =>{
  const [galaxy , setGalaxy] = useState();
  
  useEffect(()=>{
    FetchImages('latest')
    .then(res=>{
      console.log(res.photos.results)
      return setGalaxy(res.photos.results);
    })
    .catch(err=>console.log(err));
  },[]);
  
  if(!galaxy) return <p>Loading...</p>

  return(
    <div className="app">
      <div className="image-row">
        {
          galaxy.map(eachImage=>{
            return(
                <Shelf key={eachImage.id} urls={eachImage.urls} alt_description={eachImage.alt_description} />
            )
          })
        }
     </div>
    </div>

  )
}

export default Home;