import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          <Route path='/services' element={<Services></Services>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='*' element={<Error></Error>} ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
