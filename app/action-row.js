
import Delete from "./delete.js";
import Like_dislike from "./like_dislike.js";

const Actionrow = ({ movie, onDelete }) => {
  return (
    <div className="movierow">
      <div className="image">
        <img className="movie_img" src="img.svg" alt="image2" height="100%" width="100%" />
      </div>

      <div className="action">
        <h1 style={{ color: 'white' }}>{movie.title}</h1>
        <p style={{ color: 'white' }}>{movie.gener}</p>
        <h2 style={{ color: 'white' }}>Description</h2>
        <p style={{ color: 'white' }}>{movie.para}</p>
      </div>

      <div className="like_dislikerow">
        <Like_dislike />
      </div>

      <div className="delete">
        <img src="fluent_delete-32-regular.svg" alt="image3" height="100%" width="100%" onClick={() => onDelete(movie.id)} />
      </div>
    </div>
  );
};

export default Actionrow;
