import React, { useState, useEffect } from 'react';
import { FetchImages } from "../../utils/httpHandler";
import Shelf from '../Shelf/Shelf';
import style from './Home.module.css';
import '../../App.css'

const Home = () =>{
  const [galaxy , setGalaxy] = useState();
  const [page , setPage] = useState('1');
  
  useEffect(()=>{
    FetchImages('latest' , page)
    .then(res=>{
      const gal = galaxy || [];
      gal.push(...res.photos.results);
      console.log(gal);
      return setGalaxy(gal);
    })
    .catch(err=>console.log(err));
  },[page]);
  
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
     
       {galaxy&&(
         <div>
            <button onClick={()=>setPage(page+1)} className={style.button}>
              Load More
            </button>
         </div>
       )}
    </div>

  )
}

export default Home;