import React, { Component } from 'react'
import {  Route,Redirect } from 'react-router-dom'

 export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        const name = window.localStorage.getItem('name')
        const password = window.localStorage.getItem('password')
        if (name === 'admin'&&password==='12345') {
            this.isAuthenticated = true;
        }
        else {
            alert("Данные пользователя введены неверно!")
        }
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function PrivateRoute({ component: Component, ...rest }) {

    return (

        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute