import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Interacoes from './Pages/Interacoes/index';

export const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/total">
                <Interacoes />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
