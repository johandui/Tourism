import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Homepage} from './pages/Homepage';
import {Secondpage} from './pages/Secondpage';

class App extends React.Component {
    render() {
        return (
            <Homepage/>
        );
    }
}

render(<App/>, window.document.getElementById("root"));
