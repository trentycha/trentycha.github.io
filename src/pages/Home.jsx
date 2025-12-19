import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-orange-900">
            <section className="text-white py-40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-20">
                        <img src="/images/me.jpg" alt="Charlène Billat" className="rounded-lg shadow-2xl w-64 h-80 object-cover hover:scale-105 transition-transform duration-300"/>
                        <div className="text-center md:text-left">
                            <h1 className="text-5xl font-bold mb-4">Charlène Billat</h1>
                            <h2 className="text-2xl mb-6">Apprentie développeuse web FullStack</h2>
                            <p className="text-lg mb-8 text-gray-300 whitespace-pre-line">
                            En tant que développeuse web fullstack j'aime me lancer de nouveaux défis. {'\n'} C'est pourquoi je cherche une nouvelle opportunité en alternance pour poursuivre en Master {'\n'} afin de découvrir de nouveaux projets challengeants.
                            </p>
                            <Link to="/projets" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block shadow-lg">
                                Mes projets
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6 border-b-4 border-orange-500 inline-block pb-2">
                            Qui suis-je ?
                            </h2>
                            <p className="mb-4 text-white">
                            Après plusieurs années d'expériences dans la gestion de projets web, je suis actuellement en 3e année de Bachelor Concepteur et Développeur d'applications en alternance en tant que développeuse 
                            pour une entreprise de travaux de rénovation énergétique.
                            </p>
                            <p className="mb-6 text-white">
                            Je suis à la recherche de nouvelles opportunités en alternance pour poursuivre mes études en Master. Mes années de gestion de projet m'ont permis d'effleurer le développement web. 
                            J'ai donc décidé de m'orienter vers ce domaine plus technique et je suis très motivée à l'idée de poursuivre vers des projets challengeants !
                            </p>
                            <h5 className="font-semibold mb-3 text-orange-500">Langues</h5>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">
                                Anglais (C1)
                                </span>
                                <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">
                                Espagnol (B2)
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6">
                                <h5 className="font-semibold mb-3 text-orange-500">Langages</h5>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">JavaScript</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">Java</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">PHP</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">HTML, CSS</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h5 className="font-semibold mb-3 text-orange-500">Framework</h5>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">React</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">Symfony</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">Tailwind</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">Bootstrap</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">Express</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h5 className="font-semibold mb-3 text-orange-500">Environnement et base de données</h5>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">NodeJS</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">API REST</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">Jest</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">SQL (MySQL)</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">NoSQL (MongoDB)</span>
                                </div>
                            </div>

                            <div>
                                <h5 className="font-semibold mb-3 text-orange-500">Outils</h5>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">Git (GitHub, GitLab)</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">Visual Studio Code</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">IntelliJ</span>
                                    <span className="bg-white px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors shadow">Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6 border-b-4 border-orange-500 inline-block pb-2">
                            Mon CV
                            </h2>
                            <p className="text-xl mb-4 text-white font-semibold">Expériences et compétences</p>
                            <p className="mb-6 text-white">
                            Découvrez mon parcours professionnel complet dans mon CV. 
                            Vous pouvez le consulter directement sur cette page ou le télécharger au format PDF.
                            </p>
                            
                            <a href="/images/CV-Billat-Charlene.pdf" download className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors mb-8 shadow-lg">
                            Télécharger mon CV !
                            </a>

                            <h5 className="font-semibold mb-4 text-orange-500">On échange ?</h5>
                            <div className="flex flex-wrap gap-3">
                                <a href="mailto:trentycharlene@gmail.com" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors shadow">
                                <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                                <a href="https://github.com/trentycha" target="_blank" rel="noopener noreferrer"className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors shadow">
                                <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://www.linkedin.com/in/charlène-billat" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>

                        <div className="border-2 border-orange-200 rounded-lg overflow-hidden shadow-lg h-96">
                            <object data="/images/CV-Billat-Charlene.pdf" type="application/pdf" className="w-full h-full">
                                <p className="text-center py-12">
                                Votre navigateur ne supporte pas l'affichage de PDF.
                                <a href="/images/CV-Billat-Charlene.pdf" className="text-orange-500 underline ml-2">
                                Téléchargez le CV ici
                                </a>
                                </p>
                            </object>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-orange-500 mb-4">Vous souhaitez échanger ?</h2>
                    <p className="text-xl mb-12 text-white">N'hésitez pas à me contacter, je suis disponible !</p>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-5xl mb-4">📱</div>
                            <h5 className="font-semibold mb-2 text-orange-800">Portable</h5>
                            <p className="text-orange-500">
                            06 44 71 32 43
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-5xl mb-4">✉️</div>
                            <h5 className="font-semibold mb-2 text-orange-800">Email</h5>
                            <a href="mailto:trentycharlene@gmail.com" className="text-orange-500 hover:underline">
                            trentycharlene@gmail.com
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-5xl mb-4">💼</div>
                            <h5 className="font-semibold mb-2 text-orange-800">GitHub</h5>
                            <a href="https://github.com/trentycha" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                            https://github.com/trentycha
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-5xl mb-4">🔗</div>
                            <h5 className="font-semibold mb-2 text-orange-800">LinkedIn</h5>
                            <a href="https://www.linkedin.com/in/charlène-billat" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                            Mon profil LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;