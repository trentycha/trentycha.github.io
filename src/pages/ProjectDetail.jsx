import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Datas from '../datas/datas.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCode, faLightbulb, faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';


const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const foundProject = Datas.projets.find(p => p.id === parseInt(id));
        setProject(foundProject);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <p className="text-2xl text-white">Un petit instant...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-orange-900 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
                    <div className="relative h-96">
                        <img src={project.images} alt={project.titre} className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent/10"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <h1 className="text-5xl font-bold text-white">{project.titre}</h1>
                                <button onClick={() => window.open(project.github, '_blank')} className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-all border border-white/40 flex items-center gap-2">
                                    Voir sur GitHub
                                </button>
                            </div>
                            <p className="text-lg text-gray-200">{project.description}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-12 mt-3">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        
                        <div className="text-center">
                            <h3 className="text-white font-semibold text-lg mb-4">Frontend</h3>
                            <div className="space-y-3">
                                {project.front.map((tech, index) => (
                                    <div key={index} className="bg-orange-500 rounded-full px-6 py-3">
                                        <p className="text-white font-bold uppercase">{tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-white font-semibold text-lg mb-4">Backend</h3>
                            <div className="space-y-3">
                                {project.back ? project.back.map((tech, index) => (
                                    <div key={index} className="bg-orange-800 rounded-full px-6 py-3">
                                        <p className="text-white font-bold uppercase">{tech}</p>
                                    </div>
                                )) :
                                <div className="rounded-full px-6 py-3">
                                    <p className="text-white font-bold uppercase">/</p>
                                </div>
                                } 
                                
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-white font-semibold text-lg mb-4">ORM</h3>
                            <div className="space-y-3">
                                {project.ORM ? 
                                <div className="bg-gray-800 rounded-full px-6 py-3">
                                    <p className="text-white font-bold uppercase">{project.ORM}</p>
                                </div> :
                                <div className="rounded-full px-6 py-3">
                                    <p className="text-white font-bold uppercase">/</p>
                                </div>
                                } 
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-white font-semibold text-lg mb-4">Base de données</h3>
                            <div className="space-y-3">
                                {project.DB ? 
                                <div className="bg-white rounded-full px-6 py-3">
                                    <p className="text-orange-600 font-bold uppercase">{project.DB}</p>
                                </div> :
                                <div className="rounded-full px-6 py-3">
                                    <p className="text-white font-bold uppercase">/</p>
                                </div>
                                } 
                            </div>
                        </div>

                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8">
                        <h2 className="text-3xl text-white font-bold mb-6 text-gray-800">Fonctionnalités principales</h2>
                        <ul className="space-y-4">
                            {project.fonctionnalites.map((fonc, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-white text-xl font-bold"><FontAwesomeIcon icon={faCheck} /></span>
                                    <span className="text-white">{fonc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl p-8 relative">
                        <img src={project.carousel[currentImage]} alt={project.titre} className="w-full h-auto rounded-lg shadow-lg"/>
                        <button onClick={() => setCurrentImage(currentImage - 1)} disabled={currentImage === 0} className="absolute -left-10 top-1/2 -translate-y-1/2 text-white p-3 text-4xl">
                            <FontAwesomeIcon icon={faCircleArrowLeft} />
                        </button>
                        <button onClick={() => setCurrentImage(currentImage + 1)} disabled={currentImage === project.carousel.length - 1} className="absolute -right-10 top-1/2 -translate-y-1/2 text-white p-3 text-4xl">
                            <FontAwesomeIcon icon={faCircleArrowRight} />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-white rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Compétences mobilisées</h2>
                        <ul className="space-y-3">
                            {project.competences.map((comp, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-orange-600 text-xl font-bold"><FontAwesomeIcon icon={faCode} /></span>
                                    <span className="text-gray-700">{comp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Axes d'amélioration</h2>
                        <ul className="space-y-3">
                            {project.ameliorations.map((amel, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-orange-600 text-xl font-bold"><FontAwesomeIcon icon={faLightbulb} /></span>
                                    <span className="text-gray-700">{amel}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="w-full h-px bg-white mt-24 mb-12"></div>
                    <h2 className="text-2xl font-bold text-white mb-8 text-left">Découvrir d'autres projets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Datas.projets.filter(p => p.id !== project.id).slice(0, 3).map((autreProjet) => (
                                <div key={autreProjet.id} className="bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition">
                                    <img src={autreProjet.images} alt={autreProjet.titre} className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{autreProjet.titre}</h3>
                                        <p className="text-gray-600 text-sm line-clamp-2">{autreProjet.description}</p>
                                        <button onClick={`/projets/${autreProjet.id}`} className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors mt-6 shadow-lg">
                                            Voir
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
};

export default ProjectDetail;