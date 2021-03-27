import React, { Component } from "react";

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				{/* renderProps */}
				{/* <C render={obj => <B obj={obj} />} /> */}
			</div>
		);
	}
}

class B extends Component {
	render() {
		return (
			<div style={{ background: "red", margin: "20px" }}>
				<h1>我是B组件</h1>
				<div>接收父组件的值{ this.props.obj.name }</div>
			</div>
		);
	}
}

class C extends Component {
	render() {
		return (
			<div style={{ background: "blue", padding: "20px" }}>
				<h1>我是C组件</h1>
				{this.props.render({ name: "zbw" })}
			</div>
		);
	}
}
