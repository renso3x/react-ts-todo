import {
  Todo,
  Action,
  TodoActionTypes
} from '../actions';

export const todoReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
      return [...state, action.payload];

    case TodoActionTypes.removeTodo:
      return state.map((todo: Todo, index) => {
        if (index === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      });

    default:
      return state;
  }
}