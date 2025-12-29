import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-orange-200 bg-opacity-50 backdrop-blur-md ml-24 mr-24 px-8 py-12 rounded-lg shadow mt-12">
            <div className="grid md:grid-cols-3 gap-16 mb-8 ml-8 mr-80">
                
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Charlène Billat</h3>
                    <p className="text-white">
                        N'hésitez pas à parcourir mon portfolio pour découvrir mon parcours et mes différents projets !
                    </p>
                </div>

                <div className="ml-8">
                    <h3 className="text-xl font-bold mb-4 text-white">Navigation</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-white hover:text-orange-600 transition">Accueil</Link></li>
                        <li><Link to="/projets" className="text-white hover:text-orange-600 transition">Projets</Link></li>
                        <li><Link to="/parcours" className="text-white hover:text-orange-600 transition">Parcours</Link></li>
                        <li><Link to="/contact" className="text-white hover:text-orange-600 transition">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
                    <ul className="space-y-2 text-white">
                        <li className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                            <a href="mailto:trentycharlene@gmail.com" className="hover:text-orange-400 transition">
                                trentycharlene@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faPhone} className="text-white" />
                            <span>06 44 71 32 43</span>
                        </li>
                    </ul>
                    
                    <div className="flex gap-4 mt-4">
                        <a href="https://github.com/trentycha" className="text-2xl text-white hover:text-orange-400 transition">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/charlène-billat" className="text-2xl text-white hover:text-orange-400 transition">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="border-t border-white/30 pt-8 text-center text-white">
                <p>© 2026 Charlène Billat - Tous droits réservés</p>
            </div>
        </footer>
    );
};

export default Footer;