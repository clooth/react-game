import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { tick } from './actions/action-creators';
import rootReducer from './reducers/root-reducer';
import Main from './components/main';

const store = createStore(rootReducer);

function loop() {
  requestAnimationFrame(loop);

  const currentState = store.getState();
  store.dispatch(tick(currentState));
}
loop();

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
