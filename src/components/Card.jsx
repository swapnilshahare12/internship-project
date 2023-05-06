import { useState, useEffect } from 'react';
import './Card.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = () => {
  const [movies, setMovies] = useState([]);

  const url = 'https://api.tvmaze.com/search/shows?q=all';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);
  return (
    <div>
      <section className='cards row'>
              {
                 movies.map((movie,index) => {
                      return (
                        <div className='card' key={movie.show.id}>
                          <Link to={`/details/${index}`}>
                            <img
                              src={
                                movie.show.image?.original ||
                                'https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg'
                              }
                              alt='not found'
                            />
                            <div className='info'>
                              <h6>Show Name : {movie.show.name}</h6>
                              <h6>Language : {movie.show.language}</h6>
                              <h6>
                                Rating :
                                <i className='bi bi-star-fill star'></i>
                                <span className='rating'>
                                  {movie.show.rating.average || 'No rating'}
                                </span>
                              </h6>
                              <h6>Status : {movie.show.status}</h6>
                            </div>
                          </Link>
                        </div>
                      );
                    
                  })
              }
      </section>
    </div>
  );
};

export default Card;
