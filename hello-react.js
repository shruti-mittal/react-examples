'use strict';

const el = React.createElement;


// A simple component
class HelloWorld extends React.Component {
    render() {
        return el('h1', {style: {color: 'gray', textAlign: 'center'}}, 'Hi ' + this.props.inputData + '!');
    }
}

const domContainer1 = document.getElementById('react-example-one');
ReactDOM.render(el(HelloWorld, {inputData: 'Learner'}),
    domContainer1);


// A stateful component
class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: -1};

        this.tabContents = ['tab-1 content', 'tab-2 content', 'tab-3 content'];
    }

    tabClicked(index) {
        // this.setState( state => (
        //     { tabClicked: !state.tabClicked }
        //     ) );

        let newIndex = index;
        if (this.state.activeIndex === index) {
            newIndex = -1;
        }

        this.setState({activeIndex: newIndex});
    }

    tabHeadingClass(index) {
        if (index === this.state.activeIndex)
            return 'active';

        return '';
    }

    tabContentClass(index) {
        if (index === this.state.activeIndex)
            return 'show';

        return 'hide';
    }


    // componentWillUnmount()
    // {
    //     this.setState({ tabClicked : 0 });
    // }

    render() {
        const tabs = [];
        for (let i = 0; i < 3; i++) {
            tabs.push(
                el('div', {className: `row-tab-expanded`, key: 'tab-' + i},
                    el('h1', {className: `tab-heading ${this.tabHeadingClass(i)}`, onClick: () => this.tabClicked(i)}, 'Tab ' + i),
                    el('div', {className: `tab-content ${this.tabContentClass(i)}`}, this.tabContents[i]),
                )
            );
        }
        return tabs;

    }
}

const domTabContainers2 = document.getElementById('react-example-two');
ReactDOM.render(el(StatefulComponent),
    domTabContainers2);
