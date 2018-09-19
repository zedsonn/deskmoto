import React from 'react';
import FacebookLogin from 'react-facebook-login';

class LoginFacebook extends React.Component {
    responseFacebook(response) {
        console.log(response);
    }
    render() {
        return (
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                size="small"
                fields="name,email,picture"
                scope="public_profile,user_friends,user_actions.books"
                callback={this.responseFacebook}
                textButton="Entrar com Facebook"
                cssClass="facebookBtn" 
            />
        )
    }
    
}
export default LoginFacebook;