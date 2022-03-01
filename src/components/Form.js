import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Form = () => {
    const [username, kana, birth_date, sex, tel, email] = useState("");
    const postUser = () => {
        console.log("test test")
        axios.post("http://127.0.0.1:3000/users")
    }

    return (
        <div>
        <h1> 登録画面 </h1>
        <form>
            <ul class="form-list">
                <li class= "form-group">
                    <label>名前</label>
                    <input type="text" name="username" onChange={username} placeholder="仮名"/>
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
                <Link to="/finish"><button onClick={postUser}>登録する</button></Link>
            </ul>
        </form>
        </div>
    );
};

export default Form;