import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Homepage} from './pages/Homepage';
import {Secondpage} from './pages/Secondpage';
import {Lastpage} from './pages/Lastpage';
import {Thirdpage} from './pages/Thirdpage';
import {Mainpage} from './pages/Mainpage';
import './styles/firstpage.css';
import './styles/secondpage.css';
import './styles/lastpage.css';
import './styles/thirdpage.css';
import './styles/mainpage.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/second" component={Secondpage}/>
                    <Route path="/thirdpage" component={Thirdpage}/>
                    <Route path="/mainpage" component={Mainpage}/>
                    <Route path="/last" component={Lastpage}/>
                </div>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("root"));
