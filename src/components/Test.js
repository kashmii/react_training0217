// こちらをフォームのコンポーネントとして使っています

import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import '../App.css';

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            info: {
                username: '',
                kana: '',
                email: '',
                seminar_Id: 1
            },
            message:{
                username: '',
                kana: '',
                email: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        const { info, message } = this.state;
        this.setState({
            info: { ...info, [name]: value }
        });
        this.setState({
            message: {...message,[name]: this.validator(name, value)}
        });
    }

    validator(name, value){
        switch (name) {
            case 'username':
            return this.usernameValidation(value);
            case 'kana':
            return this.usernameValidation(value);
            case 'email':
            return this.emailValidation(value);
        }
    }

    // usernameとkana、2つの入力欄のバリデーションを兼ねてる
    usernameValidation(value){
        if (!value) return '※内容を入力してください';
        if (value.length < 2) return '※内容は2文字以上で入力してください';
        return '';
    }

    emailValidation(value){
        if (!value) return '※メールアドレスを入力してください';
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!regex.test(value)) return '※正しい形式でメールアドレスを入力してください';
        return '';
    }

    handleSubmit = e => {
        e.preventDefault();
    
        const reservation = {
            user_name: this.state.info.username,
            kana: this.state.info.kana,
            email: this.state.info.email,
            seminar_id: 1
        };
    
        axios.post("http://127.0.0.1:3000/reservations", { reservation })
        }

    render(){
        const { info, username } = this.state;
        return (
            <div className = "App">
                
                <p>お名前（必須）</p>
                <p>{this.state.message.username}</p>
                <input type="text" name="username" value={this.state.info.username} onChange={this.handleChange} size="30" />
                <p>フリガナ（必須）</p>
                <p>{this.state.message.kana}</p>
                <input type="text" name="kana" value={this.state.info.kana} onChange={this.handleChange} size="30" />
                <p>メールアドレス（必須）</p>
                <p>{this.state.message.email}</p>
                <input type="text" name="email" onChange={this.handleChange} defaultValue={this.state.info.email} size="30"></input>
                <br />
                <Link to="/finish">
                <input type="submit" value="送信する" onClick={this.handleSubmit} 
                disabled={!this.state.info.email || !this.state.info.username || this.state.message.email || this.state.message.username} />
                </Link>
                {/*  */}
            </div>
        );
    }
}

export default Test;
