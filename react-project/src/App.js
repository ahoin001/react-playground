import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    nameChangeHandler = (e) => {
        console.log('change detected!');
        this.setState({
            persons: [
                { name: e.target.value, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
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

        let persons = null;

        if (this.state.showPersons) {

            persons = (

                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        // We can pass methods as props!
                        // nameButtonClick = {() => this.nameButtonHandler()}

                        // To pass a function with arguments we can pass its returned value
                        nameButtonClick={() => this.nameButtonHandler("Meg")}
                        userTyped={this.nameChangeHandler}
                    />

                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}

                        // To pass a function with arguments
                        nameButtonClick={this.nameButtonHandler.bind(this, "Alex!")}
                        userTyped={this.nameChangeHandler}
                    >
                        My Hobbies: Racing
                </Person>

                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        userTyped={this.nameChangeHandler}
                    /></div>
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

                {/* Conditionally render div containing persons */}
                {/* Using teranry conditional, if state is true, then display div. if not then render null(nothing) */}
                {/* {this.state.showPersons ? <div>

                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        // We can pass methods as props!
                        // nameButtonClick = {() => this.nameButtonHandler()}

                        // To pass a function with arguments we can pass its returned value
                        nameButtonClick={() => this.nameButtonHandler("Meg")}
                        userTyped={this.nameChangeHandler}
                    />

                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}

                        // To pass a function with arguments
                        nameButtonClick={this.nameButtonHandler.bind(this, "Alex!")}
                        userTyped={this.nameChangeHandler}
                    >
                        My Hobbies: Racing
                </Person>

                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        userTyped={this.nameChangeHandler}
                    />

                </div> : null} */}

            </div>
        );

    }
}

export default App;
