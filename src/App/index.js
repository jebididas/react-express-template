import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './style.css';
import './bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get('/api/todos')
        .then(res => {
            console.log(res);
            const todos = res.data;
            console.log('todos: ', todos);
            this.setState({ todos: todos });
            console.log('after setState');
        });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul className="list-group">
            {this.state.todos.map(todo =>
                <li className="list-group-item" key={todo.id}>{todo.title}</li>
            )}
        </ul>
      </div>
    );
  }
}


export default App;
