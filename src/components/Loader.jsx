import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner} from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-t-blue-500 h-12 w-12">
        <FontAwesomeIcon icon={faSpinner} className="text-blue-500" size="2x" />
      </div>
    </div>
  )
}

export default Loader;