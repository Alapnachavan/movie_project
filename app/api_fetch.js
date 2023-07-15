"use client"

import LikeDislikeButton from "./delete.js"
import React, { useEffect, useState } from 'react';

const MyComponent =()=> {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
		fetch('https://api.themoviedb.org/3/movie/popular?api_key=305f60bfbc8d3750bac9f89b838c6b97')
		  .then((response) =>response.json())
		  .then((data) =>setData(data.results))
     };
     fetchData();
   },[]);


  
  return (
    <div>
      {data ? (
        data.map((item) =>
        <div className="datarow">
        
            <div className="imageRow">
            
                <img className="poster-path" src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} height="100%" width="100%"/>
        	</div>
        	<div className="movie_name">
        	</div>
        	
        	<div className="like_col">
        	</div>
            

        </div>
         )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;




