import React from "react";
import { useState } from "react";
// import Form from "./components/Form";
import Test from "./components/Test";
import Finish from "./components/Finish";
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import './App.css';

class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
			seminarId: 0
		};
	}



	submitRsv(option) {
	fetch("http://localhost:3000/seminar_registers", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
			// 以下はJSONを読み込むコードであり、引数にはitemというseminarテーブルのレコード
			// (つまりJSON)が入っているため、丸括弧でOK
    body: JSON.stringify( option )
    })
	}

	toForm(option) {
		console.log(option.item.id)
		// console.log(option.item),
		// axios.get("http://localhost:3000/seminars")
		// .then
	}

	// stateにseminarId=0を作り、htmlのmap内で1ずつ加算して、クリックがあったらその段階のstateを
	// Form.jsから引っ張れるかと思って作った…がその引っ張り方はそもそも無理かも。
	testTest() {
		this.setState((state) => {
			return {seminarId: state.seminarId + 1}
		});
		console.log(this.state.seminarId)
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("http://127.0.0.1:3000/seminars")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
		<Router>
			
			<Switch>
			<Route path="/test">
				<Test />
			</Route>
			<Route path="/finish">
				<Finish />
			</Route>
			<Route exact path="/">
			<div className = "App">
				<h1> セミナー一覧 </h1> {
					items.map((item) => (
					<ol key = { item.id } >
						日付: { item.date },
						場所: { item.place },
						セミナータイトル: { item.title }
						<Link to="/Test">
							<button onClick={() => this.toForm({item})}>フォーム</button>
						</Link>
					</ol>
					))
				}
			</div>
			</Route>
			</Switch>
		</Router>
	);
	}
}



export default App;
