import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  const blog = {
    title: "Cómo mejorar tus finanzas personales",
    date: "2024-11-01",
    content: `En este blog hablamos de algunos consejos prácticos sobre cómo mejorar tus finanzas personales. A través de diversos métodos y estrategias, aprenderás a gestionar mejor tu dinero y a invertir inteligentemente. La educación financiera es clave para alcanzar la estabilidad económica en un mundo lleno de oportunidades y retos. 
    Aquí puedes explorar desde el ahorro hasta la planificación para el futuro.`,
    imageUrl: "../src/assets/images/economia1.png",
  };

  const similarBlogs = [
    { 
      title: "Importancia de la educación financiera", 
      link: "/blog/2", 
      imageUrl: "../src/assets/images/economia1.png"
    },
    { 
      title: "Sostenibilidad económica para el futuro", 
      link: "/blog/3", 
      imageUrl: "../src/assets/images/economia1.png"
    },
    { 
      title: "Emprender en tiempos de crisis económica", 
      link: "/blog/4", 
      imageUrl: "../src/assets/images/economia1.png"
    },
  ];

  return (
    <div className="bg-gray-50">
      <Header />

      <div className="py-14 px-4 my-12">
        <nav aria-label="breadcrumb">
          <div className="max-w-6xl mx-auto bg-white p-4 rounded-xl shadow-md mb-8">
            <ol className="flex text-gray-600 space-x-3">
              <li>
                <Link to="/" className="hover:text-green-600 transition-colors">Inicio</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/blog" className="hover:text-green-600 transition-colors">Blogs</Link>
              </li>
              <li>/</li>
              <li className="text-gray-800">{blog.title}</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto bg-white shadow-lg p-12 rounded-lg">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{blog.title}</h2>
          <p className="text-sm text-gray-500 mb-6">{blog.date}</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{blog.content}</p>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Deja tu Comentario</h3>
            <textarea
              className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4"
              placeholder="Escribe tu comentario..."
              rows="6"
            />
            <button className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition ease-in-out duration-300 transform hover:scale-105">
              Enviar Comentario
            </button>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Blogs Similares</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarBlogs.map((blog, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                  <Link 
                    to={blog.link} 
                    className="inline-block bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition"
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
