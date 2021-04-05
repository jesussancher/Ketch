import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ModernLigthSwitch from './components/switches/modernLight/modernLightSwitch';
import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import BottleHeader from './components/headers/bottle/bottleHeader';
import { characterList } from './components/characters/characterList.js';

function App() {

    const classNames = require('classnames');
    const {nightMode} = useSelector(state => state.switchNight);

    const renderCharacter = (routerProps) => {
        let charName = routerProps.match.params.name;
        let foundChart = characterList.find( char => char.name === charName);
        console.log(foundChart)
        return (foundChart ? foundChart.component : <ModernLigthSwitch />)
    }
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
                        <Route path="/Characters/:name" render={props => renderCharacter(props)} />
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
