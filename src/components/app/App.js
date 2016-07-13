import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router'
import Header from './Header.js'
import style from './App.css'


class App extends Component {
  render() {
    return (
        <div className={style.base}>
            <Header />
            <ul>
                <li>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </li>
            </ul>

            {this.props.children}
        </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
