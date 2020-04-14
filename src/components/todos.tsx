import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { addTodo, Todo, removeTodo } from '../actions';
import { StoreState } from '../reducers'

interface AppProps {
  addTodo: typeof addTodo,
  removeTodo: typeof removeTodo,
  todos: Todo[],
}

interface AppState {
  todos: Todo[],
  todo: Todo
}

class _Todo extends React.Component<AppProps, AppState> {
  inputRef = createRef<HTMLInputElement>()

  constructor(props: AppProps) {
    super(props);

    this.state = {
      todos: [],
      todo: {
        name: '',
        completed: false
      }
    }
  }

  componentDidMount() {
    // focus on the input
    this.inputRef.current!.focus();
    this.setState(() => ({
      todos: this.props.todos
    }))
  }

  onAddClick = (): void => {
    this.props.addTodo(this.state.todo);
    // clear the element
    this.inputRef.current!.value = '';
  }

  handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      todo: {
        name: e.currentTarget.value,
        completed: false
      }
    })
  }

  onClickDone = (key: number): void => {
    this.props.removeTodo(key);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <input
          ref={this.inputRef}
          name="todo"
          placeholder="add todo here..."
          onChange={this.handleChange}
        />
        <button
          onClick={this.onAddClick}
        >Add</button>

        <p>List of Todos:</p>

        {this.props.todos.map((todo: Todo, k: number) => (
          <div key={k}>
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>{todo.name}</span> &nbsp;
            <button onClick={() => this.onClickDone(k)}>Done</button>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos
  }
}

export const Todos = connect(mapStateToProps, {
  addTodo,
  removeTodo
})(_Todo);