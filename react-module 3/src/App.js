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

    render() {

        // Second Way to add CSS inline in react
        const style = {

            backgroundColor: 'White',
            font: 'inherit',
            padding: '8px',
            border: '1px solid',
            cursor:'poniter'

        }


        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button 
                style={style}
                onClick={this.nameButtonHandler.bind(this,"Stephen!")}
                >Switch Name</button>
                
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
