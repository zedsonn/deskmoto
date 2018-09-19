import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import '../assets/css/login.css';
import logo from '../assets/img/logo.png';
import FacebookLogin from './FacebookLogin';

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
            alert("Erro na requisição");
        });

    }


    labelUp(e) {
        var element = $(e.target);
        var label = $(e.target).parent().children('label');
        $(label).css({
            transform: 'translateY(-25px)',
            transition: "all .2s ease-out",
            fontWeight: "900",
            color: 'white',
        });

        element.css({
            outline: "none",
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '25px',
            color: 'white'
        })
    }

    labelDown(e) {
        var element = $(e.target);
        var label = element.parent().children('label');
        if (element.val() === '') {
            $(label).css({
                transform: 'translateY(0)',
                transition: "all .2s ease-out",
                opacity: "0.87",
                fontWeight: "400",
                color: "black",
            });

            element.css({
                outline: "none",
                backgroundColor: 'rgba(0,0,0,0)',
                borderRadius: 0
            })
        }
    }



    render() {
        return (
            <div className="container " id="login">
                <div className="heading d-flex justify-content-center">
                    <img src={logo} id="logoLogin" className="logoLogin" />
                </div>


                <form action="#" id="formLogin" className="login-form" noValidate>
                    <section className="container d-flex flex-column justify-content-around align-items-center">

                        <div className="box-input d-flex flex-column align-items-center">
                            <label id="labelLogin" onClick={this.labelUp("input")} htmlFor="email">Email</label>
                            <input type="email" name="email" className="col-12" id="email" onFocus={this.labelUp} onBlur={this.labelDown} />
                            <div className="bar-input-login col-md-5 d-flex justify-content-start">
                                <span id="barEmail"></span>
                            </div>
                        </div>

                        <div className="box-input d-flex flex-column align-items-center ">
                            <label id="labelPass" htmlFor="password" onClick={this.labelUp("input")}>Senha</label>
                            <input type="password" className="col-12" name="password" id="pass" onFocus={this.labelUp} onBlur={this.labelDown} />
                            <div className="bar-input-login col-md-5 d-flex justify-content-start">
                                <span id="barPass"></span>
                            </div>
                        </div>

                        <div className="box-btn d-flex flex-justify-content-center col-9 align-items-center flex-column">
                            <button type="submit" className="col-6 btn btn-login shine " >Entrar</button>
                            <FacebookLogin/>
                        </div>

                        <section className="container nav-bottom-login d-flex justify-content-around ">
                            <div>
                                <label>Inscrever-se</label>
                            </div>

                            <div>
                                <label>Redefinir Senha</label>
                            </div>
                        </section>


                    </section>
                </form>
            </div>
        );
    }
}

export default LoginApp;
