import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import { register } from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import './index.css';
declare var module:any;

const render = (Component:any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)


if (module.hot) {
  module.hot.accept('./client/Root', () => { render(Root) })
}


register();