import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ModernLigthSwitch from './components/switches/modernLight/modernLightSwitch';
import React, {Fragment, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import BottleHeader from './components/headers/bottle/bottleHeader';

// import

function App() {

    const classNames = require('classnames');
    const {nightMode} = useSelector(state => state.switchNight);

    return (
        <Fragment>
            <div className={classNames('body__day', {'body__night': nightMode})}>
                <Router>
                    <Switch>
                        <Route path="/switch">
                            <ModernLigthSwitch mode={nightMode}/>
                        </Route>
                        <Route path="/header">
                            <BottleHeader />
                        </Route>
                        <Route path="/">
                            {/* <Home/> */}
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Fragment>
    );
}

export default App;
