const FeaturedBlogsSection = () => {
    const blogs = [
      { title: "Blog Principal", date: "2024-11-01", description: "Este es el blog principal destacado.", imageUrl: "https://via.placeholder.com/600x400" },
      { title: "Blog Secundario 1", date: "2024-11-05", description: "Descripción del blog secundario 1.", imageUrl: "https://via.placeholder.com/300x200" },
      { title: "Blog Secundario 2", date: "2024-11-10", description: "Descripción del blog secundario 2.", imageUrl: "https://via.placeholder.com/300x200" }
    ];
  
    return (
      <section className="py-8 px-12 lg:px-20 bg-gray-50">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Blog Destacado</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="md:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={blogs[0].imageUrl} alt={blogs[0].title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{blogs[0].title}</h3>
              <p className="text-sm text-gray-500 mb-4">{blogs[0].date}</p>
              <p className="text-gray-700">{blogs[0].description}</p>
            </div>
          </div>
  
          <div className="md:w-1/3 flex flex-col gap-6">
            {blogs.slice(1).map((blog, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{blog.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <p className="text-gray-700">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="text-center mt-8">
          <a
            href="/blog"
            className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition"
          >
            Ver todos los blogs
          </a>
        </div>
      </section>
    );
  };
  
  export default FeaturedBlogsSection;
  