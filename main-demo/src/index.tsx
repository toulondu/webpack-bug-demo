import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import * as singleSpa from 'single-spa';
import { registerApps } from './register';

function renderNode(Node: any) {
  ReactDOM.render(<Node />, document.getElementById('app'));
}

renderNode(App);

registerApps();
singleSpa.start();
