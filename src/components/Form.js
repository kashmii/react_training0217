import { Component } from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Form extends Component {
// const Form = (props) => {

    constructor(props) {
		super(props);

		this.state = {
			username: "",
            kana: "",
            email: ""
		};
	}
    // const [username, kana, email] = useState("");

    postUser = () => {
        console.log("test test")
        // 現状Formページにアクセスされた段階でこれが実行されている
        // axios.post("http://127.0.0.1:3000/seminar_registers")
    };

    render() {
        const {username, kana, email} = this.state;
        return (
            <div>
            <h1> 登録画面 </h1>
            {/* <p>{props.itemId}</p> */}
            <form>
                <ul class="form-list">
                    <li class= "form-group">
                        <label>名前</label>
                        <input type="text" name="username" placeholder="仮名"/>
                        {/* onChange={username}を上の行で使ってた */}
                    </li>
                    <li>
                        <label>カナ</label>
                        <input type="text" name="kana" placeholder="カメイ"/>
                    </li>
                    {/* <li><label>生年月日</label><input type="text" name="birth_date"/></li>
                    <li><label>性別</label><input type="text" name="sex"/></li>
                    <li><label>電話番号</label><input type="text" name="tel"/></li> */}
                    <li>
                        <label>メールアドレス</label>
                        <input type="text" name="email" placeholder="xxx@co.jp"/>
                    </li>
                    <Link to="/finish"><button onClick={() => this.postUser()}>登録する</button></Link>
                </ul>
            </form>
            </div>
        );
    }
}

export default Form;