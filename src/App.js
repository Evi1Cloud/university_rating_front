import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InputParametersPage from './pages/InputParametersPage.jsx'
import AnalysisPage from './pages/AnalysisPage.jsx'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar  />
      <Routes>
        <Route path="/input" element={<InputParametersPage/>}/>
        <Route path="/analysis" element={<AnalysisPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
