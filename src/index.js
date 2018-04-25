import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import topicsStore from './store/TopicStore';
import { Provider } from "mobx-react";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={topicsStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
