import React, { Component } from "react";

export default class Loading extends Component {
	render() {
		return <div style={loadingStyles}>Loading...</div>;
	}
}

const loadingStyles = {
	background: "grey",
	color: "orange",
};
