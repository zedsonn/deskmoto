import React from 'react';

export default class InputLogin extends React.Component {
    responseFacebook(response) {
        console.log(response);
    }
    render() {
        return (
            <div className="box-input d-flex flex-column align-items-center">
                <label id={this.props.id} onClick={this.props.onClick} htmlFor={this.props.htmlFor}></label>
                <input type={this.props.type} name={this.props.name} className={this.props.className} id={this.props.id} onFocus={this.props.onFocus} onBlur={this.props.onBlur} />
            </div>
        )
    }

}
