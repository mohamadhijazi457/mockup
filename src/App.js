import React from 'react';
import FirstPage from './components/firstpage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import BuiltExclusively from './components/built_exclusively';

const App = () => {
  return (
    <>
      <Navbar />
      <FirstPage />
      <BuiltExclusively />
      <Footer />
    </>
  );
}

export default App;