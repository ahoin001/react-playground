// We didn't import component since we are exporting a simple function and not a component currently
import React from 'react';

// In simplest form, component is just a function returning JSX
const person = (props) => {

    // Class components must say "this.props"
    return (
        <div>

            {/* Method passed in from parent component */}
            <h2 onClick= {props.nameButtonClick}> I am {props.name}! I am {props.age}</h2>
            <p> I like Coding!</p>

            {/* Allows us to get info in component element in Parent Componenet */}
            <p> {props.children}</p>

        </div>

    )

}

export default person;