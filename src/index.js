import './index.css';
import HelloWorld from './Components/hello.js';

let container1 = document.getElementById('root');

ReactDOM.render(<HelloWorld inputData="Learner!"/>, container1);