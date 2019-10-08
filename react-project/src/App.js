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
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
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
            persons : newPersons
        });

    };

    togglePersonsHandler = () => {

        // Get what the current state is
        const showPersonsComponents = this.state.showPersons;

        this.setState({
            // Set state boolean to the oppsite of what it currently is (toggle)
            showPersons: !showPersonsComponents
        })


    }

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

            persons = (

                <div>

                    {/* React will take the array returned by the map and display each JSX object (component) */}
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            // index allows us to keep track of each component in list
                            // Function will update state after person is removed
                            click = {() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                        />
                    })}

                </div>
            )

        }

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
