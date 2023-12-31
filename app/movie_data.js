"use client"
import React, { useState } from 'react';

import Actionrow from "./action-row.js";
import { likes } from "./like_dislike.js";


const Movie_data=()=>{
	const [movies,setMovies]=useState([
			{		
				id:1,
				image:"image 1.svg",
	  			title:"Dear Zindgi",
	  			year:"2023",
	  			time:"3h:23sec",
	  			gener:"drama,Romance",
	  			para:"Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections.",
	  			},
	  			
	  			{
	  			id:2,
				image:"image 1.svg",
	  			title:"Brave",
	  			year:"2012",
	  			time:"1h:33m",
	  			gener:"Adventure,comedy",
	  			para:"Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse."},
	  			
	  			{
	  			id:3,
				image:"image 1.svg",
	  			title:"monana",
	  			year:"2016",
	  			time:"1h 47m",
	  			gener:"Adventure,comedy",
	  			para:"In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."},
	  			
	  			{
	  			id:4,
				image:"image 1.svg",
	  			title:"mulan",
	  			year:"1998",
	  			time:"1h 27m",
	  			gener:"Adventure,comedy",
	  			para:"To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process.."
	  			},
	  			
	  			{
	  			id:5,
				image:"image 1.svg",
	  			title:"He Named Me malala",
	  			year:"1998",
	  			time:"1h 27m",
	  			gener:"Adventure,comedy",
	  			para:"A look at the events leading up to the Taliban's attack on Pakistani schoolgirl Malala Yousafzai for speaking out on girls' education, followed by the aftermath, including her speech to the United Nations.."
	  			},
	  			
	  			{
	  			id:6,
				image:"image 1.svg",
	  			title:"Soul Surfer",
	  			year:"2011",
	  			time:"1h 52m",
	  			gener:"Adventure,comedy",
	  			para:"Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left arm in a shark attack."
	  			},
	  			
	  			{
	  			id:7,
				image:"image 1.svg",
	  			title:"Bend it Like Backham",
	  			year:"2002",
	  			time:"1h 52m",
	  			gener:"comedy, Drama & Romance",
	  			para:"Two ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football.."
	  			},
	  			
	  			{
	  			id:8,
				image:"image 1.svg",
	  			title:"Into The Wild",
	  			year:"2007",
	  			time:"2h 28m",
	  			gener:"Drama,Biography",
	  			para:"After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.."
	  			},
	  			
	  			{
	  			id:9,
				image:"image 1.svg",
	  			title:"The Pursuit Of Happyness",
	  			year:"2006",
	  			time:"1h 27m",
	  			gener:"Adventure,comedy",
	  			para:"A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.."
	  			},
	  			
	  			{
	  			id:9,
	  			image:"image 1.svg",
	  			title:"The Intouchable",
	  			year:"2011",
	  			time:"1h 52m",
	  			gener:"Drama,Biography,Drama",
	  			para:"After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver."
	  			},
	   ]);
	   
	   const handleDelete = (id) => {
		  const updatedMovies = movies.filter((movie) => movie.id !== id);
		  setMovies(updatedMovies);
		};   
		
		
		
	   
  return (
    <div>
      {movies.map((movie) => (
        <Actionrow key={movie.id} movie={movie} onDelete={handleDelete} />
      ))}
    </div>
    
  );
};

export default Movie_data;




