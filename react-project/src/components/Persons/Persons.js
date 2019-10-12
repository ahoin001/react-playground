import React from 'react';
import Person from './Person/Person';

// Arrow functinon can omit return statement if it is one line
const persons = (props) =>

    // Recieves list of persons from state
    props.persons.map((person, index) => {

        {/* Key attribute helps react not need to rerender entire list, and instead target whatevr we change */ }
        return <Person

            // We use unique ID instead of index because indexs can change as list is changed
            key={person.id}
            // index allows us to keep track of each component in list
            // Function will update state after person is removed and return the value on click
            clickDeletePerson={() => props.clickDelete(index)}
            name={person.name}
            age={person.age}

            // event object is provided from onchange funtion
            // ChangedInput is a function passed in from parent component
            userTyped={(event) => props.changedInput(event, person.id)}
        />
    })


export default persons;
