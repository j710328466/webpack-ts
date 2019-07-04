import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/app.css'
import './styles/test.scss'

class App extends Component {
    render() {
        return <div>fuck frame content.</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));