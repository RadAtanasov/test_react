import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AuthorisationPage from './containers/AuthorisationPage/AuthorisationPage';
import HomePage from './containers/HomePage/HomePage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/auth" component={AuthorisationPage}/>
                </div>
            </Router>
        );
    }
}

export default App;