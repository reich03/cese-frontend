import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    { 
      title: "Cómo mejorar tus finanzas personales", 
      date: "2024-11-01", 
      description: "En este blog hablamos de algunos consejos prácticos sobre cómo mejorar tus finanzas personales.", 
      imageUrl: "https://via.placeholder.com/800x400", 
      link: "/blog/1"
    },
    { 
      title: "Importancia de la educación financiera", 
      date: "2024-10-15", 
      description: "Explora por qué la educación financiera es crucial en el mundo moderno y cómo empezar.", 
      imageUrl: "https://via.placeholder.com/800x400", 
      link: "/blog/2"
    },
    { 
      title: "Sostenibilidad económica para el futuro", 
      date: "2024-09-20", 
      description: "Un análisis sobre cómo podemos trabajar hacia un futuro sostenible con buenas prácticas económicas.", 
      imageUrl: "https://via.placeholder.com/800x400", 
      link: "/blog/3"
    },
    { 
      title: "Emprender en tiempos de crisis económica", 
      date: "2024-08-30", 
      description: "Descubre las claves para emprender con éxito incluso en tiempos de incertidumbre económica.", 
      imageUrl: "https://via.placeholder.com/800x400", 
      link: "/blog/4"
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <h2 className="text-center text-4xl font-extrabold pt-[4rem] text-black bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
        Todos los Blogs
      </h2>
      <p className="text-center text-xl text-gray-600 mb-12">Explora artículos que te ayudarán a mejorar tus finanzas, emprendimiento y mucho más.</p>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-[2rem]">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative group">
              <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-sm">{blog.date}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <Link 
                to={blog.link} 
                className="inline-block bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition"
              >
                Leer más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
