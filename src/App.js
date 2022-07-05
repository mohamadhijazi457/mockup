import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import Support from './components/support/support';
import Policies from './components/policies/policies';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/support' element={<Support />} />
        <Route path='/policies' element={<Policies />} />
      </Routes>
    </Router>
  );
}

export default App;