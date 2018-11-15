//import React from 'react';

// A simple component
class HelloWorld extends React.Component {
    render() {
        return el('h1', {style: {color: 'gray', textAlign: 'center'}}, 'Hi, This is Toolchain from Scratch, ' + this.props.inputData + '!');
    }
}

export default HelloWorld