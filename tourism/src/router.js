import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';

import {Homepage} from './pages/Homepage';
import {Secondpage} from './pages/Secondpage';

class App extends React.Component {
    render() {
        return (
            <Router></Router>
        );
    }
}

render(<App/>, window.document.getElementById("root"));
