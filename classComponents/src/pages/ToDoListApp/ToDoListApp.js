import React from "react";
import {
  Table,
  Container,
  Input,
} from "../../components/ToDoStyles/ToDoStyles";

class ToDoListApp extends React.Component {
  state = {
    value: "",
    todos: [
      {
        title: "Buy milk",
        done: false,
      },
    ],
  };

  handleAdd = () => {
    const { value } = this.state;
    const todo = {
      title: value,
      done: false,
    };
    this.setState((state) => ({
      todos: [...state.todos, todo],
      value: "",
    }));
  };

  inputOnChange = (event) => {
    this.setState({ value: event.target.value });
  };

  markAsDone = (todo) => {
    const { todos } = this.state;

    const newTodos = todos.map((item) => {
      if (item === todo) {
        return {
          ...item,
          done: true,
        };
      }
      return item;
    });
    const sortedTodos = newTodos.sort((a, b) => a.done - b.done);
    this.setState({ todos: sortedTodos });
  };

  removeTask = (todo) => {
    const { todos } = this.state;

    const newTodos = todos.filter((item) => item !== todo);

    this.setState({ todos: newTodos });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { todos } = this.state;
    const todoLeft = todos.filter((item) => !item.done).length;

    window.document.title = `Todos left: ${todoLeft}`;
  }

  componentWillUnmount() {
    window.document.title = "React App";
  }

  render() {
    const { todos, value } = this.state;

    return (
      <Container>
        <Input
          value={value}
          inputOnChange={this.inputOnChange}
          handleAdd={this.handleAdd}
        />
        <Table
          todos={todos}
          markAsDone={this.markAsDone}
          removeTask={this.removeTask}
        />
      </Container>
    );
  }
}

export default ToDoListApp;
