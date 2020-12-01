

import App  from './App';
//import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('content');

ReactDOM.render(

        <App />,

    rootElement);