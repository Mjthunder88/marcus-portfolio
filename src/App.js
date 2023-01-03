import {Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Resume from './screens/Resume';


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/marcus-portfolio" element={<Home />} />
        <Route path="/marcus-portfolio/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
