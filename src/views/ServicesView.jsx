import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ServicesView = () => {
  return (
    <div className="bg-gray-50">
      <Header />

      <main>
        <div className="py-14 px-4 my-12">
          {/* <nav aria-label="breadcrumb">
            <div className="max-w-8xl mx-auto bg-white p-4 rounded-xl shadow-md mb-8">
              <ol className="flex text-gray-600 space-x-3">
                <li>
                  <Link to="/" className="hover:text-red-600 transition-colors">Inicio</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/services" className="hover:text-red-600 transition-colors">Servicios</Link>
                </li>
              </ol>
            </div>
          </nav> */}

          <section className="py-12 max-w-6xl m-auto">
            <div className="text-center mb-12">
              <h2 className="font-bold text-3xl text-red-600 mb-4">Nuestros servicios</h2>
              <div className="mx-auto w-16 h-1 bg-red-600"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-600 transition-transform transform hover:scale-105 hover:shadow-2xl text-center">
                <img src="/src/assets/images/servicios_example.png" alt="Estudios Financieros" className="w-full h-48 object-contain rounded-lg mb-4" />
                <h3 className="text-red-600 text-xl mb-2">Financieros</h3>
                <p className="text-gray-600 mb-4">Ofrecemos análisis financieros detallados que apoyan la toma de decisiones estratégicas.</p>
                <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">Ver más</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-600 transition-transform transform hover:scale-105 hover:shadow-2xl text-center">
                <img src="/src/assets/images/servicios_example.png" alt="Estudios Microeconómicos" className="w-full h-48 object-contain rounded-lg mb-4" />
                <h3 className="text-red-600 text-xl mb-2">Estudios Microeconómicos</h3>
                <p className="text-gray-600 mb-4">Realizamos investigaciones enfocadas en el comportamiento de consumidores y empresas para entender mercados específicos.</p>
                <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">Ver más</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-600 transition-transform transform hover:scale-105 hover:shadow-2xl text-center">
                <img src="/src/assets/images/servicios_example.png" alt="Estudios Macroeconómicos" className="w-full h-48 object-contain rounded-lg mb-4" />
                <h3 className="text-red-600 text-xl mb-2">Estudios Macroeconómicos</h3>
                <p className="text-gray-600 mb-4">Analizamos tendencias económicas globales, regionales y nacionales para apoyar políticas públicas y estrategias corporativas.</p>
                <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">Ver más</button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesView;
