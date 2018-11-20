import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CadastroLogin from './Views/cadastroLogin';
import RedefinirSenha from './Views/redefinirSenha';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Cadastre-se" component={CadastroLogin} />
            <Route exact path="/RedefinirSenha" component={RedefinirSenha} />
        </Switch>
    </Router>
), document.getElementById('root'))
