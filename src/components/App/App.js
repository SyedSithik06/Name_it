import React from "react";
import Header from "../Header/Header";
import ResultContainer from "../ResultsContainer/ResultContainer";
import SearchBox from "../SearchBox/Searchbox";
import  './App.css'


  const name = require('@rstacruz/startup-name-generator');

 class App extends React.Component{
   constructor() {
     super();

      this.state = {
         headerText: 'Name to It!',
         headerExpanted: true,
         suggestedNames: [],
      };
   }

       handleChange =(inputText) => {
         name(inputText);
         this.setState({
             headerExpanted: !inputText,
             suggestedNames: inputText ? name(inputText): [],
            });
      };
    render(){
      return (
         <div>
            <Header 
             headerExpanded={this.state.headerExpanted} 
             headTitle={this.state.headerText}/>
            <SearchBox handleChange={this.handleChange} />
            <ResultContainer suggestedNames={this.state.suggestedNames}/>
         </div>
      );
   }

}

export default App;
