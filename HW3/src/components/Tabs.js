import React, { Component } from 'react';

class Tabs extends Component {
	constructor(props){
		super(props);
	}
	renderContent() {
		return (
			<div className="tabs__content">
				{this.props.children[this.props.active]}
			</div>
		);
	}
	render() {
		return (
			<div className="tabs__wrapper">
				{this.renderContent()}
			</div>
		);
	}
};

export default Tabs;