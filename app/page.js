
import Header from "./header.js";
import "./globals.css";
import Movie_data from "./movie_data.js";
import Add_movie from "./add_movie.js";
import Footer from "./footer.js";

const Page = () => {
	
  return (
    <>
      <Header />
      <Movie_data />
      <Add_movie/>
      <Footer/>
     
    </>
  );
};

export default Page;
