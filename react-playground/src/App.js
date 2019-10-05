// Import useState hook could use hooks
import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = (props) => {

  // Use state returns an array of two elements and always two elements
  //1st Element - Current State (Can be updated)
  //2nd Element - Function to update state and re-render component

  // Use destructure to get the elements
  const [personState, setPersonState] = useState({

    persons: [

      { name: 'Alex', age: 23 },
      { name: 'Fu', age: 33 },
      { name: 'Shirlon', age: 19 }

    ],

    // Since useState doesn't merge states, its easier to seperate each state
    //Into their own useState
    // otherStateInfo: ""

  })

  // Better practice to give each state their own useState
  const [otherState,setOtherState] = useState({otherStateInfo: "Some info in a state"})
  console.log(personState,otherState);


  const switchNameHandler = () => {

    console.log('Console log was clicked');

    // setPersonState is what we called our function in the hook It will update the state
    // DOES NOT MERGE STATES, you must inckude states you want to change AND states that are untouched or they will be lost
    setPersonState({

      // setState merges setState with our state and will only change what we made changes too 
      persons: [

        { name: 'A', age: 23 },
        { name: 'F', age: 33 },
        { name: 'S', age: 19 }

      ]
    })

  }

  // TODO HERE IS THE PRACTICE
  const setOtherStateHandler = () => {

    // function from another useState hook. having multiple hooks
    // mitigates needing to copy ALL states when we just want to change one 
    setOtherState({

      // setState merges setState with our state and will only change what we made changes too 
      otherStateInfo: "I changed!"

    })

  }

  return (

    /* 
    1. We do not need "this" for states because we are not in a class anymore
    2. Best practice to wrap a component to be returned in 1 div
    3.
    */
    <div className="App">

      <h1> React Playground </h1>
      <p>  We are from the react app!</p>

      {/* Have button call method on click */}
      <button onClick={switchNameHandler} > Switch Name </button>
      <button onClick={setOtherStateHandler} > Switch Other State </button>

      <Person
        theName={personState.persons[0].name}
        theAge={personState.persons[0].age}
      />

      <Person
        theName={personState.persons[1].name}
        theAge={personState.persons[1].age}
      />

      <Person
        theName={personState.persons[2].name}
        theAge={personState.persons[2].age}> Some Extra Info
      </Person>

    </div>

  );

  // The Javascript above is not html it is jsx, compiled by react behind the scenes
  // The below jsx is translated to html doing the below
  // return React.createElement('div',null,'h1','I\'m a React App!!!');

}

export default App;

// state can  be me manipulated to re render components with new information
// state = {

//   persons: [

//     { name: 'Alex', age: 23 },
//     { name: 'Fu', age: 33 },
//     { name: 'Shirlon', age: 19 }

//   ],

//   otherStateInfo: ""

// }

// // Method of Class Component
// switchNameHandler = () => {

// console.log('Console log was clicked', console.log("- =- =- =- ", this.state));

// // setState Merges a new state object to old state object,
// // only changing things we are manipulating
// this.setState({ 


//   // setState merges setState with our state and will only change what we made changes too 
//   persons: [

//     { name: 'A', age: 23 },
//     { name: 'F', age: 33 },
//     { name: 'S', age: 19 }

//   ] 
// })

// }
