import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom'

import GlobalStyles from 'styles/GlobalStyles';
import Home from "pages/Home";

const AppRoute = () => {
    return (
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    )
}
const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Router>
                <AppRoute />
            </Router>
        </>
    )
}

export default App;
