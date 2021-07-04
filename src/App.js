import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
      task: [],
    };
    this.handleNewTask = this.handleNewTask.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleNewTask = (event) => {
    this.setState({ task: event.target.value });
  };

  submit = (event) => {
    const { task } = this.state;
    event.preventDefault();
    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task],
        task: '',
      };
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <form onSubmit={this.submit}>
            <input
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              onChange={this.handleNewTask}
              value={this.state.task}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
