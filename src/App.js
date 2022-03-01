import React from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import Finish from "./components/Finish";
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
			username: "",
			kana: "",
			birth_date: "",
			sex: "",
			tel: [], 
			email: ""
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

	submitForm(option) {
	fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify( option )
    })
	}

	toForm(option) {
		fetch("http://localhost:3000/seminar_registers/new", {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
	body: JSON.stringify( option )
	})
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
			<div className = "App">
				<h1> セミナー一覧 </h1> {
					items.map((item) => (
					<ol key = { item.id } >
						日付: { item.date },
						場所: { item.place },
						セミナータイトル: { item.title },
						<button onClick={() => this.submitRsv({item})}>即登録</button>,
						<Link to="/form">
							<button onClick={() => this.toForm({item})}>フォーム</button>
						</Link>
					</ol>
					))
				}
			</div>
			<Switch>
			<Route path="/form">
				<Form />
			</Route>
			<Route path="/finish">
				<Finish />
			</Route>
			<Route exact path="/home">
				<Home />
			</Route>
			</Switch>
		</Router>
	);
	}
}



export default App;
