import React from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {

  // state can  be me manipulated to re render components with new information
    state = {
      
      persons: [

        { name: 'Alex', age: 23 },
        { name: 'Fu', age: 33 },
        { name: 'Shirlon', age: 19 }

      ]
    
  }

  // Method of Class Component
  switchNameHandler = () => {

    console.log('Console log was clicked', console.log("- =- =- =- ", this.state));

    // setState Merges a new state object to old state object,
    // only changing things we are manipulating
    this.setState({ 
      persons: [

        { name: 'A', age: 23 },
        { name: 'F', age: 33 },
        { name: 'S', age: 19 }

      ] 
    })

  }

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

        {/* Have button call method on click */}
        <button onClick={this.switchNameHandler} > Switch Name </button>

        <Person theName={this.state.persons[0].name} theAge={this.state.persons[0].age} />
        <Person theName={this.state.persons[1].name} theAge={this.state.persons[2].age} />
        <Person theName={this.state.persons[2].name} theAge={this.state.persons[1].age}> Some Extra Info </Person>

      </div>


    );

    // The Javascript above is not html it is jsx, compiled by react behind the scenes
    // The below jsx is translated to html doing the below
    // return React.createElement('div',null,'h1','I\'m a React App!!!');

  }


}

export default App;
