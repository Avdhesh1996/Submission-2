import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      
        <Navigation />
        <div className="mt-4"> {/* Add margin top */}
          <div className="container">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductItem />} /> {/* Define route for ProductItem with id parameter */}
            </Routes>
          </div>
        </div>
      
    </Router>
  );
}

export default App;

