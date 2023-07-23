"use client"
import React, { useState } from 'react';


const LikeDislikeButton = () => {
  const [data, setData] = useState([
	{ id: 1, likes: 0 },
  ]);

  const handleLikeClick = (id) => {
	setData((prevData) =>
	  prevData.map((item) =>
	    item.id === id ? { ...item, likes: item.likes + 1 } : item
	  )
	);
  };

  const handleDislikeClick = (id) => {
	setData((prevData) =>
	  prevData.map((item) =>
	    item.id === id ? { ...item, likes: item.likes - 1 } : item
	  )
	);
  };
  
return (
	<div>
	  {data.map((item) => (
	    <div key={item.id}>
	        <img src="like.svg" alt="Like" onClick={() => handleLikeClick(item.id)} height="45" width="45" />
	      <div className="dot">{item.likes}</div>
	        <img className="like_img" src="Icon - Like.svg" onClick={() => handleDislikeClick(item.id)} alt="Dislike" height="45" width="45" />
	      <span>{item.dislikes}</span>
	      <p>{item.text}</p>
	    </div>
	  ))}
	</div>
  );
};

export default LikeDislikeButton;
