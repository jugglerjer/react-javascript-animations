import React, { Component } from "react";
import github from "./icons/github.svg";
import link from "./icons/link.svg";
import "./SourceCodeLink.css";

export default props => (
	<a
		href="https://github.com/jugglerjer/react-javascript-animations"
		target="_blank"
		className="source-code-link"
	>
		<img src={github} className="source-code-link__icon" />
		<span className="source-code-link__text">View Source on Github</span>
		<img src={link} className="source-code-link__accessory" />
	</a>
);
