import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return null; // Customize the root error boundary for your microfrontend here.
  },
});

const { bootstrap : _bootstrap, mount: _mount, unmount: _unmount } = lifecycles;

/** First start */
export function bootstrap(props){

  return Promise.resolve().then(() => {
    console.log(props.name,"bootstrap");
    _bootstrap(props);
  });
}

/** Always micro front end mount */
export function mount(props){

  return Promise.resolve().then(() => {
    console.log(props.name,"mount");
    _mount(props);
  });
}

/** Always micro front end unmount */
export function unmount(props){

  return Promise.resolve().then(() => {
    console.log(props.name,"unmount");
    _unmount(props);
  });
}
