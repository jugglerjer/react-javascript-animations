import React from "react";
import { Motion, spring } from "react-motion";

const ReactJavascriptAnimatedModalScreen = props => (
  <Motion
    style={{
      x: props.shouldShow ? spring(0) : spring(100)
    }}
  >
    {interpolatingStyle =>
      React.cloneElement(props.children, {
        style: {
          WebkitTransform: `translateX(${interpolatingStyle.x}%)`,
          transform: `translateX(${interpolatingStyle.x}%)`
        }
      })
    }
  </Motion>
);

export default ReactJavascriptAnimatedModalScreen;
