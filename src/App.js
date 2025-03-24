import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ListEventPage from "./pages/ListExperiencePage";
import SearchPage from "./pages/searchPage";
// import Amplify from 'aws-amplify';
import { Amplify } from 'aws-amplify';

import awsExports from './aws-exports';


function App() {
  Amplify.configure(awsExports);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/listExperience" element={<ListEventPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
