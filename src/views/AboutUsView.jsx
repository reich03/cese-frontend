import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUsView = () => {
  return (
    <div>
      <Header /> 

      <div className="relative w-full h-[22rem] bg-gray-200">
        <img src="/src/assets/images/ceseinfo.png" alt="Quienes somos" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Quienes Somos</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-red-600 mb-2">Nuestra Universidad</h2>

          {/* Separador sutil rojo */}
          <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-t-4 hover:border-red-500">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Misión</h3>
              <p className="text-gray-600">
                Nuestra misión es proporcionar soluciones innovadoras y de alta calidad a nuestros clientes, creando valor a través de la excelencia.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-t-4 hover:border-red-500">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser reconocidos como líderes en nuestro sector, contribuyendo al crecimiento y desarrollo de la comunidad empresarial.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-t-4 hover:border-red-500">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Valores</h3>
              <ul className="text-gray-600">
                <li>- Compromiso</li>
                <li>- Innovación</li>
                <li>- Integridad</li>
                <li>- Trabajo en equipo</li>
                <li>- Responsabilidad social</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-red-600 mb-8">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-t-4 hover:border-red-500">
              <img src="/src/assets/images/foto-ejemplo.jpg" alt="Equipo 1" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-600 mb-2">Juan Pérez</h3>
              <p className="text-gray-600">CEO - Líder visionario con más de 10 años de experiencia en el sector.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-t-4 hover:border-red-500">
              <img src="/src/assets/images/foto-ejemplo.jpg" alt="Equipo 2" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-600 mb-2">Ana Gómez</h3>
              <p className="text-gray-600">Directora de Marketing - Estratega creativa con una pasión por la innovación digital.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-t-4 hover:border-red-500">
              <img src="/src/assets/images/foto-ejemplo.jpg" alt="Equipo 3" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-600 mb-2">Carlos Ramírez</h3>
              <p className="text-gray-600">Gerente de Ventas - Con experiencia en liderazgo y desarrollo de estrategias comerciales.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer /> 
    </div>
  );
};

export default AboutUsView;
