import React from 'react';
import GoogleLogin from 'react-google-login';

class LoginGoogle extends React.Component {
    render() {
        return (
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Entrar com Gmail"
                className="googleBtn"
            /> 
        )
    }

}
export default LoginGoogle;