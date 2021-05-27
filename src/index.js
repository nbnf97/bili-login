import React from 'react'
import ReactDOM from 'react-dom'

import LoginLeft from './login-left'
import LoginRight from './login-right'

import './styles/index.css'

class LoginApp extends React.Component{
    render(){
        return(
            <div className="login-app">
                <TitleLine />
                <LoginBox />
            </div>
        )
    }
}

const Loading = () =>{
    return (
        <div>
            Loading...
            
        </div>
    )
}

const TitleLine = () =>{
    return (
        <div className="title-line">
            <span className="tit" style={{fontSize: "38px"}}>登录</span>
        </div>
    )
}

const LoginBox = () =>{
    return (
        <div className="login-box clearfix">
            <LoginLeft />
            <div className="line"></div>
            <LoginRight />
        </div>
    )
}



ReactDOM.render(<LoginApp />, document.getElementById('root'))