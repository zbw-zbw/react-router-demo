/*
 * @Author: your name
 * @Date: 2021-02-28 22:15:04
 * @LastEditTime: 2021-03-03 21:38:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\App.js
 */

import { Component } from "react";
import axios from "axios";

import "./App.css";

import Demo1 from "./components/Demo1";
import Demo2 from "./components/Demo2";

class App extends Component {
	state = {
		loading: false,
		keyword: "",
		list: []
	};

	getSearch = e => {
		const { value } = e.target;
		this.setState({ keyword: value });
	};

	searchUser = () => {
		const { keyword } = this.state;
		this.setState({ loading: true });
		axios.get(`http://api.github.com/search/users?q=${keyword}`).then(res => {
			this.setState({ list: res.data.items });
			this.setState({ loading: false });
		});
	};

	onEnter = e => {
		const { keyCode } = e;
		if (keyCode !== 13) return;
		this.searchUser();
	};

	jumpToUserHome = url => {
		window.open(url);
		// window.location.href = url
	};

	render() {
		const { list, loading } = this.state;
		return (
			<div>
				<label htmlFor="search">搜索GitHub用户：</label>
				<input type="text" id="search" placeholder="输入关键词搜索" onKeyUp={this.onEnter} onChange={this.getSearch} />
				&nbsp;
				<button onClick={this.searchUser}>搜索</button>
				<ul style={{ display: "flex", flexWrap: "wrap" }}>
					{loading
						? "数据加载中，请稍等..."
						: list.map(item => {
								return (
									<li
										key={item.id}
										onClick={() => this.jumpToUserHome(item.html_url)}
										style={{ width: "100px", display: "flex", flexDirection: "column", marginRight: "20px" }}>
										<img src={item.avatar_url} style={{ width: "100%", cursor: "pointer" }} alt={item.login} />
										<p
											style={{
												textAlign: "center",
												textOverflow: "ellipsis",
												overflow: "hidden",
												whiteSpace: "nowrap"
											}}>
											{item.login}
										</p>
									</li>
								);
						  })}
				</ul>
				<Demo1 />
				<Demo2 />
			</div>
		);
	}
}

export default App;
