/*
 * @Author: your name
 * @Date: 2021-02-28 22:15:04
 * @LastEditTime: 2021-03-07 15:24:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\App.js
 */

import { Component, lazy, Suspense } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

import "./App.css";

// import Home from './pages/Home'
// import About from './pages/About'

import Loading from './components/Loading'

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

class App extends Component {
	render() {
		return (
			<div>
				<NavLink to="/home">Home</NavLink> &nbsp; &nbsp;
				<NavLink to="/about">About</NavLink>
				<hr />
				{/* 注册路由 */}
				<Suspense fallback={<Loading />}>
					<Switch>
						<Route path="/home" component={Home}></Route>
						<Route path="/about" component={About}></Route>
						<Redirect to="/home" />
					</Switch>
				</Suspense>
			</div>
		);
	}
}

export default App;
