import { useEffect, useState } from 'react'
import { GET } from '../api';
// import { animeData } from "../data/animeData";
import { Link} from "react-router-dom";
import { Pagination } from 'antd';
import '../App.css';
import { truncateSynopsis } from '../helper/textHelpers';
import { useFilterData } from '../helper/AnimeFilterData';
import Loader from '../components/Loader';


function App() {
 const [ searchQuery, setSearchQuery] = useState('');
 const [ currentAnimeData, setCurrentAnimeData ] = useState([]);
 const [ currentPage, setCurrentPage] = useState(1);
 const [ totalPages, setTotalPages] = useState();

 const itemsPerPage = 10;

 const fetchAnime = async(page=1, query='') => {
  try {
    const response = await GET(`/anime?filter[text]=${query}&page[limit]=10&page[offset]=${(page - 1) * 10}`);
    setCurrentAnimeData(response.data.data);
    setTotalPages(Math.ceil(response.data.meta.count / 10));
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with an error
      console.error('Server responded with an error:', error.response.status);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received from the server');
    } else {
      // Something happened in setting up the request
      console.error('An error occurred while setting up the request:', error.message);
      }
  }
}

  useEffect(()=> {
    fetchAnime(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const filteredAnimeData = useFilterData(currentAnimeData, searchQuery);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  if(!currentAnimeData) {
    return <Loader/>
  }
  return (
    <div className="mt-5 w-full">
      <div className="flex flex-row justify-between items-center mb-3 w-full">
        <div><p className="text-xl font-extrabold ml-2 mt-2 mb-3">Trending Animes</p></div>
        <div className="mr-4">
          <input 
            type="text"  
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" 
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 pl-2 pr-2"> 
        {filteredAnimeData.map((anime, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={anime?.links?.self}>
                <img className="rounded-t-lg object-cover h-40 w-full" src={anime?.attributes?.posterImage?.original} alt={anime?.attributes?.canonicalTitle}/>
            </a>
            <div className="p-3 h-full justify-start">
                <a href={anime?.links?.self}>
                    <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{anime?.attributes?.canonicalTitle}</h5>
                </a>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">{truncateSynopsis(anime?.attributes?.synopsis, 10)}</p>
                <Link to={`anime/${anime.id}`} className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View more
                    <svg className="w-2 h-2 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
          </div>
        ))} 
      </div>
      {/* Pagination goes here */}
      <div className="mt-10 mb-4 flex justify-center items-center space-x-4">
        <Pagination
          current={currentPage}
          total={totalPages}
          showSizeChanger={false}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default App;
