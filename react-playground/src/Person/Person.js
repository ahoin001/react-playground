// We didn't import component since we are exporting a simple function and not a component currently
import React from 'react';

// In simplest form, component is just a function returning JSX
const person = (props) => {

    // Class components must say "this.props"
    return <h2> I am {props.theName}! I am {props.theAge}</h2>

}

export default person;