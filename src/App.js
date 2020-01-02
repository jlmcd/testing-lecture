import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Practice the Piano'
      },
      {
        id: 2,
        title: 'Practice the Piano'
      },
      {
        id: 3,
        title: 'Practice the Piano'
      }
    ],
    id: 4,
    input: '',
    num: 0
  }

  addTodo() {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: this.state.id + 1, title: this.state.input }
      ],
      input: '',
      id: this.state.id + 1
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.todos.map(task => (
          <h2 key={task.id}>{task.title}</h2>
        ))}
        <input
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
        />
        <button onClick={() => this.addTodo()}>Add Todo</button>
      </div>
    )
  }
}

export default App
