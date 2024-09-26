// frontend/src/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industry from './pages/Industry';
import Work from './pages/Work';
import Contact from './pages/Contact';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/industry" component={Industry} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
        </Switch>
    );
}

export default Routes;
