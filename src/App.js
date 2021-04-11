import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom';
import About from './Modules/About';
import Contact from './Modules/Contact';
import Header from './Modules/Header';
import Home from './Modules/Home';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "React",
            isUserAuthenticated: true
        }
    }

    render() {
        return (
            <div className="container-fluid">
              <Header />
                <Router>
                    <ul className="nav bg-light">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route
                            exact
                            path="/bugfix"
                            render={() => {
                            return (this.state.isUserAuthenticated
                                ? <Redirect to="/home"/>
                                : <Redirect to="/about"/>)
                        }}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                </Router>
                <marquee className="display-4"> Page is under working... Will be updated soon...</marquee>
            </div>
        )
    }
}
