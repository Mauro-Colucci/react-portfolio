import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import './App.scss';
import Dashboard from './components/Dashboard';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;