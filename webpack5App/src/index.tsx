import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import singleSpaReact from 'single-spa-react';

class rootComponent extends React.Component {
  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    return <App />;
  }
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
  domElementGetter,
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = (props: any) => {
  return reactLifecycles.mount(props);
};

export const unmount = [reactLifecycles.unmount];

function domElementGetter() {
  return document.getElementById('webpack5-container') as Element;
}
let MOUNT_NODE = domElementGetter();

function renderIndependent(Node: any) {
  if ((window as any).isIndependent) {
    MOUNT_NODE = document.getElementById('app') as HTMLElement;
    MOUNT_NODE && ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    ReactDOM.render(<Node />, MOUNT_NODE);
  }
}

renderIndependent(App);