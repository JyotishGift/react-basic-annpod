import React, { Component } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import GitHub from './components/GitHub';
import Counter from './components/Counter';
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			active: 0,
			tabs: [
				{id: 0,
				title:'GitHub',
				content: <GitHub />},
				{id: 1,
				title:'Counter',
				content: <Counter />},
				{id: 2,
				title:'Author',
				content: <div>created by Ann</div>},
			]
		};
	}
	handleClick(index, event) {
		event.preventDefault();
		this.setState({
			active: index
		});
	}

	render() {

	return (
		<div className="App">
			<div className='tabs'>
				<ul className='tabs__labels'>
					{this.state.tabs.map((item) => (
						<li key={item.id}>
						<a className={this.state.active === item.id ? 'active' : ''}
							onClick={this.handleClick.bind(this, item.id)}
							href="#">{item.title}</a>
						</li>
					))}
				</ul>
				<Tabs active={this.state.active} >
					{this.state.tabs.map((item) => (
						<Tab key={item.id}>
							{item.content}
						</Tab>
					))}
				</Tabs>
			</div>
		</div>
	 );
	}
}

export default App;
