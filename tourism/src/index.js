import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Homepage} from './pages/Homepage';
import {Secondpage} from './pages/Secondpage';

import './styles/secondpage.css';
import 'antd/dist/antd.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/second" component={Secondpage}/>
                </div>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("root"));
