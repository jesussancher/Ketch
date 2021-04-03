import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ModernLigthSwitch from './components/switches/modernLight/modernLightSwitch';
import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import BottleHeader from './components/headers/bottle/bottleHeader';
import CandaceFlynn from './components/characters/candaceFlynn/candaceFlynn';

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
                        <Route path="/character">
                            <CandaceFlynn />
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
