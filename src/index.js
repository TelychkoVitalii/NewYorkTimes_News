import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import RootStore from './store/RootStore';
import { Provider } from "mobx-react";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={new RootStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
