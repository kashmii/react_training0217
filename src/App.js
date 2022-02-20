import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
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
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					日付: { item.date },
					場所: { item.place },
					セミナータイトル: { item.title }
					<button onClick={() => this.submitRsv({item})}>BUTTON</button>
				</ol>
				))
			}
		</div>
	);
}
}

export default App;
