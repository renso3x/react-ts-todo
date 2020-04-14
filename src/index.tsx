import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';

import { Todos } from './components/todos';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));