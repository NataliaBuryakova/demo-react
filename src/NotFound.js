import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <div >
                Страница не найдена. <Link to='/'>Домой</Link>
            </div>
        )
    }
}