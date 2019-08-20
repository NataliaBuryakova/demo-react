import React, {Component} from 'react'

import {
    withRouter
} from "react-router-dom";
import {fakeAuth} from '../../hoc/PrivateRoute'

const AuthButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthenticated && (
            <p>
                Добро пожаловать, {window.localStorage.getItem('name')}!
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/login"));
                    }}
                >
                    Выйти
                </button>
            </p>
        )
);

export default class Profile extends Component {


    render() {
        return (
            <div>
                <AuthButton/>
               Профиль пользователя
            </div>
        )
    }
}