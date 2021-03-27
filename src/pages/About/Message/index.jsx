import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import Detail from "./Detail";

export default class Message extends Component {
	state = {
		messageObj: [
			{
				id: 1,
				title: "消息1"
			},
			{
				id: 2,
				title: "消息2"
			},
			{
				id: 3,
				title: "消息3"
			}
		]
	};

	toMessageDetail = (type, id, title) => {
		return () => {
      const { push, replace } = this.props.history;
			if (type === "push") push(`/about/message/detail/${id}/${title}`);
			if (type === "replace") replace(`/about/message/detail/${id}/${title}`);
		};
	};

	render() {
		const { messageObj } = this.state;
		return (
			<div>
				<ul>
					{messageObj.map(item => {
						return (
							<li key={item.id} style={{ marginBottom: "20px" }}>
								{/* 向路由组件传递params参数 */}
								<NavLink to={`/about/message/detail/${item.id}/${item.title}`}>{item.title}</NavLink>
								{/* 向路由组件传递search参数 */}
								{/* <NavLink to={`/about/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</NavLink> */}
								{/* 向路由组件传递state参数 */}
								{/* <NavLink to={{ pathname: "/about/message/detail", state: { id: item.id, title: item.title } }}>
									{item.title}
								</NavLink> */}
								{/* 编程式路由 */}
								&nbsp; &nbsp;
								<button onClick={this.toMessageDetail("push", item.id, item.title)}>push</button>
								&nbsp; &nbsp;
								<button onClick={this.toMessageDetail("replace", item.id, item.title)}>replace</button>
								&nbsp; &nbsp;
								<button onClick={() => this.props.history.go(2)}>go</button>
								&nbsp; &nbsp;
								<button onClick={() => this.props.history.goBack()}>back</button>
								&nbsp; &nbsp;
								<button onClick={() => this.props.history.goForward()}>forward</button>
							</li>
						);
					})}
				</ul>
				<hr />
				{/* 接收params参数 */}
				<Route path="/about/message/detail/:id/:title" component={Detail}></Route>
				{/* search、state 无需接收 */}
				{/* <Route path="/about/message/detail" component={Detail}></Route> */}
			</div>
		);
	}
}
