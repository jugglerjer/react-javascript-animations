import React from "react";
import { CSSTransition } from "react-transition-group";

const ReactCSSAnimatedModalScreen = props => (
	<CSSTransition
		in={props.shouldShow}
		timeout={300}
		unmountOnExit
		classNames="screen"
	>
		{props.children}
	</CSSTransition>
);

export default ReactCSSAnimatedModalScreen;
