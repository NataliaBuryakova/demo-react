import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import  './LoginForm.css'
import {fakeAuth} from '../../hoc/PrivateRoute'

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '',
            password:'',
            redirectToReferrer:false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        const { id, value } = event.currentTarget
        this.setState({ [id]: event.currentTarget.value })
    }


    validate = () => {
        const { name, password } = this.state
        if (name.trim()&&password.trim()){
            return true;
        }
        return false;
    }
    handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements[0].value
        const password = event.target.elements[1].value
        window.localStorage.setItem('name', name)
        window.localStorage.setItem('password', password)
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: fakeAuth.isAuthenticated });
        });

    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }
        return (
            <form onSubmit={this.handleSubmit} className="LoginForm">
                <label>
                    Имя:
                    <input id ="name"  type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Пароль:
                    <input id ="password" type="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <input disabled={!this.validate()} type="submit" value="Войти" />
            </form>
        );
    }

}

