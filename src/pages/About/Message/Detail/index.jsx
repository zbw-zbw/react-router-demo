import React, { Component } from "react";
// import qs from "querystring";

export default class Detail extends Component {
	state = {
		detailList: [
			{
				id: 1,
				content: "HTML5是世界上最好的语言"
			},
			{
				id: 2,
				content: "CSS3是世界上最好的语言"
			},
			{
				id: 3,
				content: "JavaScript是世界上最好的语言"
			}
		]
	};

	render() {
		const { detailList } = this.state;

		console.log(this.props.history);
		const { id, title } = this.props.match.params;
		const content = detailList.find(item => item.id === +id).content;

		// urlencoded编码字符串
		// const { search } = this.props.location;
		// const obj = qs.parse(search.slice(1));

		// const { id, title } = this.props.location.state || {}

		// const content = detailList.find(item => item.id === +id)?.content;

		// const content = detailList.find(item => item.id === +obj.id).content;
		return (
			<div>
				<ul>
					<li>ID: {id}</li>
					<li>title: {title}</li>
					<li>content: {content}</li>

					{/* <li>ID: {obj.id}</li>
					<li>title: {obj.title}</li>
          <li>content: {content}</li> */}

					{/* <li>ID: {id}</li>
					<li>title: {title}</li>
					<li>content: {content}</li> */}
				</ul>
			</div>
		);
	}
}
