import React, { Component } from "react";

import PubSub from "pubsub-js";

export default class Demo1 extends Component {
	componentDidMount() {
		this.token = PubSub.subscribe("zbw", (_, data) => {
			console.log("接收到兄弟组件的值", data);
		});
	}

	componentWillUnmount() {
		PubSub.unsubscribe(this.token);
	}

	render() {
		return (
			<div>
				<h1>我是组件1</h1>
			</div>
		);
	}
}
