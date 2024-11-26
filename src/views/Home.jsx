import Header from '../components/Header';
import SliderComponent from '../components/Slider';
import EventsSection from '../components/EventSection';
import Footer from '../components/Footer';
import FeaturedBlogsSection from '../components/FeaturedBlogsSection';
import PartnerLogosSlider from '../components/PartnerLogosSlider';

function Home() {
  return (
    <div className="App">
      <Header />
      <SliderComponent />
      <EventsSection />
      <FeaturedBlogsSection />

      <section className="bg-gray-100 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Nuestros Convenios</h2>
          <p className="text-lg text-gray-600">Nos enorgullece colaborar con las mejores empresas y organizaciones</p>
        </div>
        <PartnerLogosSlider />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
