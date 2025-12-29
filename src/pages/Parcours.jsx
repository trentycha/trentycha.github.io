import { useEffect, useState } from 'react';
import Datas from '../datas/datas.json';
import Loading from '../components/Loading.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Parcours = () => {
    const [parcours, setParcours] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchParcours = async () => {

            try {
            setParcours(Datas.parcours);
            setLoading(false);
            } catch (error) {
                return ({error : error.message});
            }
        };

        fetchParcours();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-20 pt-40">
                    <h1 className="text-4xl font-bold text-white mb-4">Mon Parcours</h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-orange-800 hidden md:block"></div>

                    <div className="space-y-12">
                        {parcours.map((exp, index) => (
                            <div key={exp.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                
                                <div className={`absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${exp.type === 'formation' ? 'from-gray-600 to-gray-800' : 'from-orange-500 to-orange-700'} shadow-2xl z-1`}>
                                    <FontAwesomeIcon icon={exp.type === 'formation' ? faGraduationCap : faBriefcase} className="text-white text-2xl"/>
                                </div>

                                <div className={`w-full md:w-5/12`}>
                                    <div className="bg-white rounded-2xl p-6 shadow-2xl">
                                        
                                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${exp.type === 'formation' ? 'from-gray-500 to-gray-600' : 'from-orange-400 to-orange-600'} mb-4`}>
                                            {exp.period}
                                        </span>

                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                                        <p className="text-orange-500 font-semibold mb-3">{exp.entreprise}</p>

                                        {exp.details && (
                                            <ul className="space-y-2 text-gray-800 text-sm mt-4">
                                                {exp.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-orange-400 mt-1"><FontAwesomeIcon icon={faLocationArrow} /></span>
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parcours;