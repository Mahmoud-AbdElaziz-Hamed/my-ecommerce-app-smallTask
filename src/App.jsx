import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Slider />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
