import React, { Component } from 'react';
import $ from 'jquery';
import logo from '../assets/img/logo.png';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import InputCustomValidation from './ComponentsCustom/InputCustomValidation'


class LoginApp extends Component {
    constructor() {
        super();
        this.state =
            {
                Nome: null,
                Email: null,
                Senha: null,
            };

    }

    componentWillMount() {
        console.log("Will");
        $.ajax({
            url: 'http://demo9584915.mockable.io/cadastro/motoboy',
            type: 'POST',
            data: JSON.stringify({ Nome: '', Email: '', Senha: '' }),
            dataType: 'json'
        }).done(function (response) {
            this.state = response;
            console.log(this.state);
        }.bind(this)).fail(function (erro) {
            console.log("Erro na requisição");
        });

    }

    enabledBtn(element) {
        element = $(element.target);
        console.log(element.val());
    }

    render() {
        return (
            <div className="container " id="login">
                <div className="heading d-flex justify-content-center">
                    <img src={logo} id="logoLogin" className="logoLogin" />
                </div>
                <form action="#" id="formLogin" className="login-form" noValidate>
                    <section className="d-flex flex-column justify-content-around align-items-center">

                        <InputCustomValidation id="emailLogin" onKeyDown={this.enabledBtn} type="email" placeholder="Email" />
                        <InputCustomValidation id="senhaLogin" onKeyDown={this.enabledBtn} type="password" placeholder="Senha" />

                        <div className="box-btn d-flex flex-justify-content-around col-9  flex-column">
                            <button id="loginBtn" type="submit" disabled className="col-12 btn btn-login shine" >Entrar</button>
                            <br />
                            <FacebookLogin />
                            <br />
                            <GoogleLogin />
                        </div>
                    </section>
                </form>
                <div className=" nav-bottom-login d-flex justify-content-around ">
                    <div>
                        <label>Inscrever-se</label>
                    </div>

                    <div>
                        <label>Redefinir Senha</label>
                    </div>
                </div>
            </div>




        );
    }
}

export default LoginApp;
