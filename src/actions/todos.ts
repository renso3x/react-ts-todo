import { Dispatch } from 'redux';

// Todo object
export interface Todo {
  name: string;
  completed: boolean;
}

// Action Types Enum
export enum TodoActionTypes {
  addTodo,
  removeTodo,
  fetchTodo
}

export const addTodo = (todo: Todo): AddTodosAction => {
  return {
    type: TodoActionTypes.addTodo,
    payload: todo
  }
}

export const removeTodo = (index: number): RemoveTodoAction => {
  return {
    type: TodoActionTypes.removeTodo,
    payload: index
  }
}

// Type dispatch function
export interface AddTodosAction {
  type: TodoActionTypes.addTodo,
  payload: Todo // todo object
}

export interface RemoveTodoAction {
  type: TodoActionTypes.removeTodo,
  payload: number; // id
}

// Type Action as Union
export type Action = RemoveTodoAction | AddTodosAction;