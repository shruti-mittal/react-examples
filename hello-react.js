'use strict';

const el = React.createElement;


// A simple component
class HelloWorld extends React.Component
{
    render()
    {
        return el( 'h1', {style: {color:'gray', textAlign: 'center'}}, 'Hi '+ this.props.inputData +'!' );
    }
}

const domContainer1 = document.getElementById('react-example-one');
ReactDOM.render( el( HelloWorld, {inputData: 'Learner'} ),
    domContainer1);


// A stateful component
class StatefulComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = { tabClicked : 0 };
    }

    tabClicked()
    {
        // this.setState( state => (
        //     { tabClicked: !state.tabClicked }
        //     ) );
        this.setState( {tabClicked: !this.state.tabClicked} );
    }

    // componentWillUnmount()
    // {
    //     this.setState({ tabClicked : 0 });
    // }

    render()
    {
        const tab = 'Tab ' + this.props.tab;

        if(this.state.tabClicked)
        {
            return el('div', { className: 'row-tab-expanded' },
                el('button', { className: 'row-tab', onClick: ()=>this.tabClicked() }, tab),
                el('div', { className: 'tab-content' }, 'tab-content....'),
                );
        }

        return el('button', { className: 'row-tab', onClick: ()=>this.tabClicked() }, tab);

    }
}

const domTabContainers2 = document.getElementsByClassName('react-example-two');

//https://stackoverflow.com/questions/35969974/foreach-is-not-a-function-error-with-javascript-array
[...domTabContainers2].forEach( (tab)=>{

    let tabNumber = tab.dataset.tab;

    ReactDOM.render( el(StatefulComponent, {tab: tabNumber}),
        tab );
} );
