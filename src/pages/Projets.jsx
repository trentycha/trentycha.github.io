import { useNavigate } from 'react-router-dom';
import Datas from '../datas/datas.json';

const Projets = () => {
  const navigate = useNavigate();
  const { projets } = Datas;

  const handleDiscover = (projetsId) => {
    navigate(`/projets/${projetsId}`);
  };

  return (
    <div>
      <section className="text-white py-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Mes Projets</h1>
            <p className="text-xl text-gray-300 mb-8"> Découvrez mes derniers projets web !</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((projet) => (
              <div key={projet.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div className="h-56 overflow-hidden relative group">
                    <img src={projet.images} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3"> {projet.titre}</h3>
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{projet.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button onClick={() => handleDiscover(projet.id)} className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
                    Je découvre
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projets;