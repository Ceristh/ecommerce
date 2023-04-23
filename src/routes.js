import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/home';
import Products from './components/Products';
import Cart from './components/Cart';

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/cart', component: Cart }
];

const RouteWithSubRoutes = route => (
    <Route path={route.path} exact={route.exact} render={props => (
        <route.component {...props} routes={route.routes} />
    )} />
);

const renderRoutes = (routes) => {
    return (
        <React.Fragment>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </React.Fragment>
    );
}

export default renderRoutes(routes);
