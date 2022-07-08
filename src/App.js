import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import Support from './components/support/support';
import Policies from './components/policies/policies';

const App = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => { 
      window.removeEventListener("resize", handleResize);
    }
  }, [setScreenWidth]);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home screenWidth={screenWidth} />} />
        <Route path='/support' element={<Support screenWidth={screenWidth} />} />
        <Route path='/policies' element={<Policies screenWidth={screenWidth} />} />
      </Routes>
    </Router>
  );
}

export default App;