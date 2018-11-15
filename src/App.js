import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Topics from './components/Topics/Topics';

import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Topics />
            </Provider>
        );
    }
}

export default App;
