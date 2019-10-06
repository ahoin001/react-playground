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

    // event is passed to us automatically by react
    nameChangeHandler = (e) => {
        console.log('change detected!');
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: e.target.value, age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.nameButtonHandler}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    // We can pass methods as props!
                    // nameButtonClick = {() => this.nameButtonHandler()}
                    // To pass a function with arguments
                    nameButtonClick = {() => this.nameButtonHandler("Meg")}
                    userTyped = {this.nameChangeHandler}
                />

                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}

                    // To pass a function with arguments
                    nameButtonClick = {this.nameButtonHandler.bind(this,"Alex!")}
                    userTyped = {this.nameChangeHandler}
                >
                    My Hobbies: Racing
                </Person>

                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    userTyped = {this.nameChangeHandler}
                />
            </div>
        );

    }
}

export default App;
