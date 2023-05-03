import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Article from './Components/Article';
import Single from './Components/single';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path='/article/:title' element={<Single/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
