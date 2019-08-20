import React, {Component} from 'react'
import Menu from '../../components/Menu'


export default class Layout extends Component {
 render() {
        return (
            <div>
                <Menu className = "menu-main"/>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
  }