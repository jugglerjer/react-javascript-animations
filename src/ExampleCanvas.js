import React from "react";
import ReactCSSAnimatedModalScreen from "./ReactCSSAnimatedModalScreen";
import ReactJavascriptAnimatedModalScreen from "./ReactJavascriptAnimatedModalScreen";
import Modes from "./Modes";
import css from "./icons/css.svg";
import javascript from "./icons/javascript.svg";
import "./ExampleCanvas.css";

const ExampleCanvas = props => {
	const modeValue = Modes[props.mode].value;
	const modeDisplayName = Modes[props.mode].displayName;
	return (
		<div className="canvas">
			<RootScreen
				modeValue={modeValue}
				modeDisplayName={modeDisplayName}
				onModalScreenOpen={props.onModalScreenOpen}
			/>
			{modeValue === "react-css" && (
				<ReactCSSAnimatedModalScreen
					shouldShow={props.shouldShowScreen}
				>
					<ModalScreen
						modeValue={modeValue}
						modeDisplayName={modeDisplayName}
						onClose={props.onModalScreenClose}
					/>
				</ReactCSSAnimatedModalScreen>
			)}
			{modeValue === "react-javascript" && (
				<ReactJavascriptAnimatedModalScreen
					shouldShow={props.shouldShowScreen}
				>
					<ModalScreen
						modeValue={modeValue}
						modeDisplayName={modeDisplayName}
						onClose={props.onModalScreenClose}
					/>
				</ReactJavascriptAnimatedModalScreen>
			)}
		</div>
	);
};

const Screen = props => <div className="screen" {...props} />;

const RootScreen = props => (
	<Screen>
		<Logo mode={props.modeValue} />
		<p>Animate a screen with a {props.modeDisplayName}.</p>
		<button onClick={props.onModalScreenOpen}>Show a Screen</button>
	</Screen>
);

const ModalScreen = props => (
	<Screen style={props.style} id="animated-screen">
		<span role="img" aria-label="hello!">
			👍
		</span>
		<p>Nice! Now hide this screen with a {props.modeDisplayName}.</p>
		<button
			style={{
				color: "#8360e3",
				background: "#FFFFFF"
			}}
			onClick={props.onClose}
		>
			Hide this Screen
		</button>
	</Screen>
);

const Logo = props => {
	if (props.mode === "react-css") {
		return <img src={css} alt="css-logo" height="128" width="128" />;
	} else if (props.mode === "react-javascript") {
		return (
			<img
				src={javascript}
				alt="javascript-logo"
				height="128"
				width="128"
			/>
		);
	}
};

export default ExampleCanvas;
