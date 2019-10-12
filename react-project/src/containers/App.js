import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

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
            persons = 

                <div>

                    <Persons 
                        persons = {this.state.persons}
                        clickDelete = {this.deletePersonHandler}
                        changedInput = {this.nameChangedHandler}

                    />
                    {/* React will take the array returned by the map and display each JSX object (component) */}

                </div>
            
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
