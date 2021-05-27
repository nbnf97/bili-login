import { render } from '@testing-library/react'
import React from 'react'

import './styles/login-right.css'

/*
    LoginRight
*/

class LoginRight extends React.Component{
    render(){
        return (
            <div className="login-right">
                <LoginForm />
                {/* <Remember />
                <BtnBox />
                <SnsBox /> */}
            </div>
        )
    }
}

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isPasswordLoginBox: true,
            isEmailLoginBox: false,
            username: '',
            password: '',
        }
    }

    getLoginBoxMsg = (isPwd) =>{
        this.setState({
            isPasswordLoginBox: isPwd,
            isEmailLoginBox: !isPwd,
        })
    }
    
    render(){
        return(
            <div>
                <TypeTab {...this.state} getMsg={this.getLoginBoxMsg}/>
                <div>
                    <Username username={this.state.username}/>
                    <Password />
                </div>
                <Remember />
                <BtnBox />
                <Sns />
            </div>
        )
    }
}

const TypeTab = (props) =>{
    const changeLoginBoxP = () =>{
        const isPwd = true
        props.getMsg(isPwd)
    }

    const changeLoginBoxE = () =>{
        const isPwd = false
        props.getMsg(isPwd)
    }

    const clsName = {
        password: props.isPasswordLoginBox ? "active" : "",
        email: props.isEmailLoginBox ? "active" : ""
    }

    return(
        <div className="type-tab">
                <span className={clsName["password"]} onClick={changeLoginBoxP}>密码登录</span>
                <span className={clsName["email"]} onClick={changeLoginBoxE}>短信登陆</span>
        </div>
    )
}

const Username = (props) =>{
    const userError = "请输入注册时用的邮箱或者手机号呀"
    const passwdError = "喵，你还没输入密码么？"

    return(
        <div className="item username status-box">
            <input type="text" placeholder="你的手机号/邮箱" id="login-username"
                maxLength="50" autoComplete="off"
            />
            <span className="status"></span>
            <div className="text clearfix">
                <p className="tips"></p>
            </div>
        </div>
    )
}

const Password = (props) =>{
    return(
        <div className="item password status-box">
            <input type="password" placeholder="密码" id="login-password"
            />
            <span className="status error"></span>
            <div className="text clearfix">
                <p className="tips"></p>
            </div>
        </div>
    )
}

const Remember = (props) =>{
    return (
        <div className="remember">
            <div className="remember-tool">
                <label>
                    <label className="remember-check checkbox-bwxr">
                        <input type="checkbox"/>
                        记住我
                        <span>不是在自己的电脑上不要勾选此项</span>
                    </label>
                </label>
                <div>
                    <a target="_blank" className="forget-password" href="https://passport.bilibili.com/register/findpassword.html#/verify?gourl=https%3A%2F%2Fwww.bilibili.com%2F">忘记密码?</a>
                    <a target="_blank" className="not-checkout" href="https://www.bilibili.com/blackboard/help.html#/?qid=01c16d22f6bb44fd976e8874142b60b6">无法验证?</a>
                </div>
            </div>
        </div>
    )
}

const BtnBox = (props) =>{
    const regLink = "https://passport.bilibili.com/register/phone.html#/phone"

    return(
        <div className="btn-box">
            <a className="btn btn-login">登录</a>
            <a className="btn btn-reg" href={regLink}>注册</a>
        </div>
    )
}

const Sns = (props) =>{
    return (
        <div className="sns">
            <a href="#" className="btn weixin">微信账号登录</a>
            <a href="#" className="btn qq">QQ账号登录</a>
            <a href="#" className="btn weibo">微博账号登录</a>
        </div>
    )
}

export default LoginRight;
