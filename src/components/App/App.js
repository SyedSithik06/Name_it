import React,{useState} from "react";
import Header from "../Header/Header";
import ResultContainer from "../ResultsContainer/ResultContainer";
import SearchBox from "../SearchBox/Searchbox";
import  './App.css'


  const name = require('@rstacruz/startup-name-generator');

  const App = () =>{
      
     const[headerText, setHeaderText] = useState ("Name It!"); 
     const[headerExpanded, setHeaderExpanded] =  useState(true);
     const[suggestedNames, setSuggestedNames] = useState([]);

    const handleChange =(inputText) => {
      setHeaderExpanded(!inputText)
      setSuggestedNames( inputText ? name(inputText): [])
   };
   return (
      <div>
         <Header 
          headerExpanded={headerExpanded} 
          headTitle={headerText}/>
         <SearchBox handleChange={handleChange} />
         <ResultContainer suggestedNames={suggestedNames}/>
      </div>
   );

  }
export default App;
