import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Demo2 extends Component {
	publish = () => {
		PubSub.publish("zbw", { name: "zbw", age: 18 });
	};
	render() {
		return (
			<div>
				<h1>我是组件2</h1>
				<button onClick={this.publish}>发布消息</button>
			</div>
		);
	}
}
