import { useState } from "react";
import Modal from "react-modal";

const LoginBox = ({ closeLoginBox }) => {
  const [activeTab, setActiveTab] = useState("login");

  const handleClose = (e) => {
    if (e.target.id === "modal-container") closeLoginBox();
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeLoginBox}
      contentLabel="Login Modal"
      id="modal-container"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg relative">
        <span
          onClick={closeLoginBox}
          className="absolute top-4 right-4 text-3xl cursor-pointer hover:text-red-500"
        >
          &times;
        </span>
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          {activeTab === "login" ? "Iniciar sesión" : "Registrarse"}
        </h2>
        <div className="flex justify-between mb-6 gap-5">
          <button
            onClick={() => setActiveTab("login")}
            className={`w-full py-2 text-center rounded-lg transition-all duration-300 transform ${
              activeTab === "login"
                ? "bg-red-500 text-white scale-105 shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-red-600 hover:text-white"
            }`}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`w-full py-2 text-center rounded-lg transition-all duration-300 transform ${
              activeTab === "register"
                ? "bg-red-500 text-white scale-105 shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-red-600 hover:text-white"
            }`}
          >
            Registrarse
          </button>
        </div>

        {activeTab === "login" ? (
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo:
              </label>
              <input
                type="text"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Ingrese su correo"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Iniciar sesión
            </button>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo:
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Ingrese su correo"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Registrarse
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default LoginBox;
