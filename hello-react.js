'use strict';

const el = React.createElement;

class HelloWorld extends React.Component
{
    render()
    {
        return el( 'h1', {style: {color:'gray', textAlign: 'center'}}, 'Hey!' );
    }
}

const domContainer1 = document.getElementById('react-example-one');
ReactDOM.render( el( HelloWorld ),  domContainer1);