import NavbarComponent from './NavbarComponent';
import CarouselComponent from './CarouselComponent';
import FeaturesSection from './FeaturesSection';
import FooterComponent from './FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
function App() {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <FeaturesSection />
      <FooterComponent />
    </div>
  );
}

export default App;
