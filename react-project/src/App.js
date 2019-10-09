import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        showPersons: false,
        otherState: 'some other value'
    };

    nameButtonHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                // Unique ID's in real world dta will have them
                { id: '0', name: newName, age: 28 },
                { id: '1', name: 'Manu', age: 29 },
                { id: '2', name: 'Stephanie', age: 27 }
            ]
        });
    };

    deletePersonHandler = (personIndex) => {

        // This is bad because it refernces state instead of makes copy,
        // const newPersons = this.state.persons;

        // Make copy of state
        const newPersons = [...this.state.persons];

        // Make change to copy of state
        // Remove the selected person
        newPersons.splice(personIndex,1);
        
        // Update state with new state
        this.setState({
            // rerenders components after setting state
            persons : newPersons
        });

    };

    nameChangedHandler = (event,id) => {

        // 1. Fin index of person we want to update 

        // Get find index returns the first index of element that satisifes our conditon
        const personindex = this.state.persons.findIndex(person => {
            return person.id === id; 
        })
     
        // 2. Make a copy of the person we want to modify 

        // Copy the person at the proper index
        let newPerson = {
            ...this.state.persons[personindex]
        };

        // 3. Modify the copy
        newPerson.name = event.target.value;

        // 4. Make copy of the state and update the person at the index with our changed version
        const updatedPersons = [...this.state.persons];

        updatedPersons[personindex] = { ...newPerson }

        this.setState({ persons : updatedPersons})

    }

    togglePersonsHandler = () => {

        // Get what the current state is
        const showPersonsComponents = this.state.showPersons;

        this.setState({
            // Set state boolean to the oppsite of what it currently is (toggle)
            showPersons: !showPersonsComponents
        })

    }


    // Render Happens everytime a rerender occurs (State changes with set state for example)
    render() {

        // Second Way to add CSS inline in react
        const style = {

            backgroundColor: 'White',
            font: 'inherit',
            padding: '8px',
            border: '1px solid',
            cursor: 'poniter'

        }

        // Create empty element
        let persons = null;

        // If we have a person(s) in our array
        if (this.state.showPersons) {

            // TODO paranthesis vs brackets ?
            persons = (

                <div>

                    {/* React will take the array returned by the map and display each JSX object (component) */}
                    {this.state.persons.map((person, index) => {

                        {/* Key attribute helps react not need to rerender entire list, and instead target whatevr we change */}
                        return <Person 

                            // We use unique ID instead of index because indexs can change as list is changed
                            key = {person.id}
                            // index allows us to keep track of each component in list
                            // Function will update state after person is removed and return the value on click
                            clickDeletePerson = {() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}

                            // event object is provided from onchange funtion
                            // 
                            userTyped={(event) => this.nameChangedHandler(event,person.id)}
                        />
                    })}

                </div>
            )

        }

        // Core template
        return (
            <div className="App">

                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}
                >Toggle Persons</button>

                {/*
                    Cleaner way to reference a conditional content, 
                    Check render scope for how it is created
                */}
                {persons}

            </div>
        );

    }
}

export default App;
