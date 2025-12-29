import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (

        <div className="fixed top-0 left-0 right-0 z-10 bg-orange-200 bg-opacity-50 backdrop-blur-md flex justify-between gap-4 ml-24 mr-24 mt-2 px-8 rounded-lg shadow">
            <div className="w-1/6 p-6">
                <Link to="/" className="text-white font-bold"><FontAwesomeIcon icon={faCode} className="text-orange-400 text-l" /> Portfolio Charlène</Link>
            </div>
            <div className="w-1/2 flex p-6 gap-16 justify-end">
                <Link to="/projets" className="text-white hover:text-orange-400 transition"> Mes projets</Link>
                <Link to="/parcours" className="text-white hover:text-orange-400 transition"> Parcours</Link>
                <Link to="/contact" className="text-white hover:text-orange-400 transition"> Contact</Link>
            </div>
        </div>

    )

}

export default Header;