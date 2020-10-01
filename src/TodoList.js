import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/actions/todos";

class TodoList extends Component {
  state = {
    newTodoText: "",
    tempatLahir:"",
    motto:""
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addTodo(this.state.newTodoText);
    this.props.addTempatLahir(this.state.tempatLahir)
    this.props.addMotto(this.state.motto)

    this.setState({ newTodoText: "", tempatLahir:"", motto:"" });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={e => this.setState({ newTodoText: e.target.value })}
            value={this.state.newTodoText}
          />

          <input
            type="text"
            onChange={c => this.setState({ tempatLahir: c.target.value })}
            value={this.state.tempatLahir}
          />

          <input
            type="text"
            onChange={b => this.setState({ motto: b.target.value })}
            value={this.state.motto}
          />  
          <button type="submit">Salvar</button>
        </form>
        <ul>
          {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
          {/* {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
          {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)} */}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
