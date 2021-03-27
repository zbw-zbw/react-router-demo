import React, { Component } from "react";

import News from "./News";
import Message from "./Message";
import { NavLink, Route, Switch } from "react-router-dom";

export default class About extends Component {
	render() {
		return (
			<div>
        <h1>About</h1>
        <NavLink to="/about/news">News</NavLink> &nbsp; &nbsp;
        <NavLink to="/about/message">Message</NavLink>
        <br/>
        <br/>
        <hr />
        <Switch>
          <Route path="/about/news" component={News}></Route>
          <Route path="/about/message" component={Message}></Route>
        </Switch>
			</div>
		);
	}
}
