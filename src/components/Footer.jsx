const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 py-12 overflow-hidden">
    <div className="container  grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mx-[2rem] ">
      <div>
        <h4 className="text-lg font-bold mb-4 text-red-400">Acerca de nosotros</h4>
        <p>
          Somos el CESE, promoviendo la educación financiera y la sostenibilidad
          económica con programas innovadores y accesibles.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-4 text-red-400">Enlaces útiles</h4>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-red-400 transition duration-300">
              Portafolio de servicios
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400 transition duration-300">
              Investigación
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-4 text-red-400">Contáctanos</h4>
        <ul>
          <li className="flex items-center mb-3">
            <img
              src="../src/assets/images/school.svg"
              alt=""
              className="w-6 h-6 mr-3"
            />
            <span>Dirección: Calle 123</span>
          </li>
          <li className="flex items-center mb-3">
            <img
              src="../src/assets/images/phone.svg"
              alt=""
              className="w-6 h-6 mr-3"
            />
            <span>Teléfono: +57 123 4567890</span>
          </li>
          <li className="flex items-center">
            <img
              src="../src/assets/images/gmail.svg"
              alt=""
              className="w-6 h-6 mr-3"
            />
            <span>Correo: contacto@cese.edu.co</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-10 text-sm text-gray-500">
      &copy; 2024 CESE. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
