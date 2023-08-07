import React from "react";
import './App.css';
import Homepage from './components/homepage';
import HowItWorksCopy from "./components/howitworks";
import ExamplesDocument from "./components/exampledocument";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import CustomerReview from "./components/CustomerReview";
import FileUploadCopy from "./components/upload";
function App() {
  return (
    
      <div className="App">
        <Homepage/>
        <HowItWorksCopy/>
        <ExamplesDocument/>
        <Signup/>
        <Signin/>
        <Dashboard/>
        <CustomerReview/>
        <FileUploadCopy/>
      </div>
    
  );
}

export default App;
