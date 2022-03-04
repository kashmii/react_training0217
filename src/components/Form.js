// 今は使っていません！！
// フォームの部分はTest.jsを使っています！

import { Component } from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
    const [username, setUsername] = useState("");
    const [kana, setKana] = useState("");
    const [email, setEmail] = useState("");
    
    const postUser = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:3000/reservations", {
            user_name: username,
            kana: kana,
            email: email,
            seminar_id: 1,
            // user_id: 12
        })
    }

    return (
        <div>
        <h1> 登録画面 </h1>
        <form>
            <ul class="form-list">
                <li class= "form-group">
                    <label>名前</label>
                    <input type="text" name="username" placeholder="仮名" onChange={e => setUsername(e.target.value)} />
                </li>
                {username}
                <li>
                    <label>カナ</label>
                    <input type="text" name="kana" placeholder="カメイ" onChange={e => setKana(e.target.value)}/>
                </li>
                {kana}
                {/* <li><label>生年月日</label><input type="text" name="birth_date"/></li>
                <li><label>性別</label><input type="text" name="sex"/></li>
                <li><label>電話番号</label><input type="text" name="tel"/></li> */}
                <li>
                    <label>メールアドレス</label>
                    <input type="text" name="email" placeholder="xxx@co.jp" onChange={e => setEmail(e.target.value)}/>
                </li>
                {email}
                <Link to="/finish"><button onClick={postUser}>登録する</button></Link>
            </ul>
        </form>
        </div>
    );
}

export default Form;