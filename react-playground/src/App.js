import React from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {
  render() {

    return (

      /* 
      
      1. Class is a reserved word in JSX so we must use className
      2. Best practice to wrap a component to be returned in 1 div
      3.
      */
      <div className="App">
      
        <h1> React Playground </h1>
        <p>  We are from the react app!</p>

        <Person theName="Alex" theAge="20" />
        <Person theName="Ryan" theAge="29"> Some Extra Info </Person> 
        <Person theName="Craig" theAge="18" />
      
      </div>


    );

    // The Javascript above is not html it is jsx, compiled by react behind the scenes
    // The below jsx is translated to html doing the below
    // return React.createElement('div',null,'h1','I\'m a React App!!!');

  }


}

export default App;
