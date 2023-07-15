import Delete from "./delete.js"
import Like_dislike from "./like_dislike.js"
const Actionrow = (props) => {
	const {title , year , time , gener,Discription, para} = props.movie;
    return(
   		<div className="movierow">
	       	<div className="image">
	       	<img className="movie_img" src="img.svg"  alt="image2" height="100%" width="100%"/>
	       	</div>
	       		
	       	<div className="action">
	       		<h1 className="color:white">{title}</h1>
	       		<p className="color:white">{gener}</p>
	       		<h2 className="color:white">{Discription}</h2>
	       		<p className="color:white">{para}</p>
	       		
	       		
	       	</div>
	       	<div className="like_dislikerow">
	       		<Like_dislike/>
	       		<Delete/>
	       	</div>
	       	

	     </div>
	);
};
export default Actionrow;
