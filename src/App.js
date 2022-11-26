import './App.css';
import About from './components/about/About';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';


function App() {



  return (
    <div className="App">
    <Cover/>
    <Navbar/>
    <About/>
    <Slider/>
    <Footer/>
    </div>
  );
}

export default App;
