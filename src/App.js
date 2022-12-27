import {Routes, Route } from 'react-router-dom';
import Home from './screens/Home';


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/marcus-portfolio" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
