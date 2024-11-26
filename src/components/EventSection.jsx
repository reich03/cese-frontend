const EventsSection = () => {
  const events = [
    { title: "Evento 1", date: "2024-01-15", description: "Lorem ipsum dolor sit amet consectetur." },
    { title: "Evento 2", date: "2024-02-10", description: "Necessitatibus animi quos odit unde laborum velit." },
    { title: "Evento 3", date: "2024-03-20", description: "Deserunt facere, aspernatur reprehenderit soluta fugiat." },
  ];

  return (
    <section className="bg-gray-50 py-14">
      <h2 className="text-center text-4xl font-extrabold mb-10 text-gray-800">
        Próximos Eventos
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="absolute top-0 left-0 bg-red-500 text-white rounded-br-xl p-4 shadow-lg">
              <div className="text-center">
                <span className="block text-2xl font-bold">
                  {new Date(event.date).toLocaleDateString("es-ES", {
                    day: "2-digit",
                  })}
                </span>
                <span className="uppercase text-sm">
                  {new Date(event.date).toLocaleDateString("es-ES", {
                    month: "short",
                  })}
                </span>
              </div>
            </div>
            <div className="p-6 ml-16 ">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4 ">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
