import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GET } from '../api';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom/dist';

const Details = () => {
  const { id } = useParams();
  const [anime, setAnime ] = useState(null);

  useEffect(() => {
    const fetchDetailAnime = async () => {
      try {
        const response = await GET(`anime/${id}`);
        setAnime(response.data.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchDetailAnime();
  }, [id]);

  if (!anime) {
    return <Loader/>;
  }

  return (
<div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
  <div className="flex flex-col md:flex-row">
    <img
      className="w-full md:w-2/5 object-cover h-80 md:h-auto"
      src={anime.attributes.posterImage.original}
      alt={anime.attributes.canonicalTitle}
    />
    <div className="p-4 md:p-6 flex flex-col justify-between w-full">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {anime.attributes.canonicalTitle}
        </h1>
        <p className="mt-2 text-gray-700 dark:text-gray-400">
          {anime.attributes.synopsis}
        </p>
      </div>
      <div className="mt-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 dark:text-gray-400">Rating:</span>
          <span className="text-xl font-bold text-blue-700 dark:text-blue-600">
            {anime.attributes.averageRating}%
          </span>
        </div>
        <Link
          to={`watch-now`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Watch Now
          <svg
            className="w-2 h-2 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</div>


  )
}

export default Details;