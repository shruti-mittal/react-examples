'use strict';

const el = React.createElement;

class HelloWorld extends React.Component
{
    render()
    {
        return el( 'h1', null, 'Hey!' );
    }
}

const domContainer1 = document.getElementById('react-example-one');
ReactDOM.render( el( HelloWorld ),  domContainer1);