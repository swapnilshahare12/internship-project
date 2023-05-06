import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import axios from 'axios';

const Details = () => {
  const params = useParams();

    const [movies, setMovies] = useState([]);

  const url = 'https://api.tvmaze.com/search/shows?q=all';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);
    
    const bookMovie = (movie) => {
        const bookedMovie = { movieName: movie }
        console.log(bookedMovie)
        localStorage.setItem("bookedMovie",bookedMovie)
        alert(`your >>${movie}<< show successfully booked`)
    }

    
    
  return (
    <div className='details'>
      <section className='card-details'>
        <div className='imagediv'>
          <img src={movies[params.index]?.show.image.original} alt='' />
        </div>
        <div className='right'>
          <h3>{movies[params.index]?.show.name}</h3>
          <div className='genresdiv'>
            {movies[params.index]?.show?.genres.map((item, index) => {
              return (
                <h6 className='genres' key={index}>
                  {item}
                </h6>
              );
            })}
          </div>
          <h5>
            Status: <span>{movies[params.index]?.show.status}</span>
          </h5>
          <button
            className='moviebookingbtn'
            onClick={() => bookMovie(movies[params.index]?.show.name)}
          >
            Book Movie Ticket
          </button>
          <h5>
            Rating: <i className='bi bi-star-fill star'></i>
            <span>
              {movies[params.index]?.show.rating.average || 'No rating'}
            </span>
          </h5>
          <h5>
            Official site :
            <span>
              {movies[params.index]?.show.officialSite ||
                'Official site not available'}
            </span>
          </h5>
          <h5>
            <span
              dangerouslySetInnerHTML={{
                __html: `${movies[params.index]?.show.summary}`,
              }}
            ></span>
          </h5>
        </div>
      </section>
    </div>
  );
};

export default Details;
