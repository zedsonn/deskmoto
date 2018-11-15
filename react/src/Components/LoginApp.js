import React, { Component } from 'react';
import $ from 'jquery';
import logo from '../assets/img/logo.png';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import InputCustomValidation, { validationValues } from './ComponentsCustom/InputCustomValidation'


export default class LoginApp extends Component {
    constructor() {
        super();
        this.state =
            {
                Email: null,
                Senha: null,

            };

    }

    //componentDidMount() {
    //    console.log("Will");
    //    $.ajax({
    //        url: 'http://demo9584915.mockable.io/cadastro/motoboy',
    //        type: 'POST',
    //        data: JSON.stringify({ Nome: '', Email: '', Senha: '' }),
    //        dataType: 'json'
    //    }).done(function (response) {
    //        this.state = response;
    //        console.log(this.state);
    //    }.bind(this)).fail(function (erro) {
    //        console.log("Erro na requisição");
    //    });

    //}

    

    render() {
        return (
            <div className="container " id="login">
                <div className="heading d-flex justify-content-center">
                    <img src={logo} id="logoLogin" className="logoLogin" />
                </div>
                <form id="formLogin" className="login-form" noValidate>
                    <section className="d-flex flex-column justify-content-around align-items-center">

                        <InputCustomValidation id="emailLogin" ke={enabledBtn} type="Email" placeholder="Email" />
                        <InputCustomValidation id="senhaLogin" blur={enabledBtn} type="password" placeholder="Senha" />

                        <div className="box-btn d-flex flex-justify-content-around col-9  flex-column">
                            <a id="loginBtn" href="../../../index.html" className="col-12 btn btn-login shine" >Entrar</a>
                            <br />
                            <GoogleLogin />     
                            <br />
                            <FacebookLogin />
                        </div>
                    </section>
                </form>
                <div className=" nav-bottom-login d-flex justify-content-around ">
                    <div>
                        <label id="registrar" className="lbl-footer">Inscrever-se</label>
                    </div>

                    <div>
                        <label className="lbl-footer">Redefinir Senha</label>
                    </div>
                </div>
            </div>
        );
    }
}
function enabledBtn(element) {
    var emailValid = validationValues($("#emailLogin"));
    var passwordValid = validationValues($("#senhaLogin"));
    var elementFocus = $(element).is(":focus");



    if (passwordValid && emailValid && !elementFocus) 
        $("#loginBtn").removeAttr('disabled')
    else 
        $("#loginBtn").attr('disabled', true)
    
}

