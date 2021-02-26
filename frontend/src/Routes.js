import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Comentarios from './pages/Contato.js';
import Home from './pages/Home.js';
import Loja from './pages/Loja.js';
import Produtos from './pages/Produtos.js'



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/Home" component={Home} />
            <Route path="/Produtos" component={Produtos} />
            <Route path="/Loja"  component={Loja} /> 
            <Route path="/Contato"  component={Comentarios} />
        </Switch>
    </BrowserRouter>
);

    export default Routes;