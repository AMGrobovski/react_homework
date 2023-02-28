import { Component } from "react";
import CounterView from "../components/CounterView";
// import Layout from "../components/Layout";

class CounterContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			countValue: 0,
			isEven: true,
		};
	}

	componentDidUpdate() {
		if (this.state.countValue % 2 === 0 && this.state.isEven !== true) {
			this.setState({isEven: true});
		} else if (this.state.countValue % 2 !== 0 && this.state.isEven !== false) {
			this.setState({isEven: false});
		}
	}

	handleIncrement = () => {
		this.setState((prevState) => ({
			countValue: prevState.countValue + 1,
		}))
	};

	handleDecrement = () => {
		if (this.state.countValue > 0){
			this.setState((prevState) => ({
				countValue: prevState.countValue - 1,
			}))
		}
	};

	handleReset = () => {
		this.setState({ 
			countValue: 0,
			isEven: true,
		})
	};

	render() {
		console.log(this.state)
		return <CounterView 
		counterValue={this.state.countValue} 
		isEvenValue={this.state.isEven}
		handleIncrement={this.handleIncrement} 
		handleDecrement={this.handleDecrement} 
		handleReset={this.handleReset}
		/>
	}
};

export default CounterContainer;