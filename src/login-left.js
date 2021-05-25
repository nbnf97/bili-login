import React from 'react'


import './styles/qrcode-footer.css'
import './styles/qrcode-con.css'
/*
    QRcode-Con
        tip图和二维码的切换（mousemove） http://js.jirengu.com/lulozerixi/2/edit?html,css,js,output
        二维码加载动画
        扫描成功情况
*/
class QRcodeCon extends React.Component{
    state = {
        isHidden: false,
    }

    render() {
        const statusHidden = "hidden"
        
        return(
            <div className="qrcode-con">
                <div className="tv-icon" />
                <div className="qrcode-box">
                    <div className="qrcode-tips"></div>
                    <div className="qrcode-img"></div>
                    <Status />
                </div>
            </div>
        )
    }
}

const Status = () =>{
    return (
        <div className="status hidden">
            <div class="overdue">点击刷新</div>
        </div>
    )
}

/*
    QRcode-Footer
    
*/
class QRcodeFooter extends React.Component{
    render(){
        return(
            <div className="qrcode-footer">
                <div className="Two2"></div>
                <div className="txt">
                    <StatusTxt />
                    <AppLink />
                </div>
                <div className="Three3"></div>
            </div>
        )
    }
}

const StatusTxt = (props) => {
    const isTimeOver = false
    if (isTimeOver){
        return (
            <div className="status-txt">二维码已失效</div>
        )
    }
    return (
        <div className="status-txt">扫描二维码登录</div>
    )
}

const AppLink = (props) =>{
    return (
        <p className="app-link">
            请使用 <a href="//app.bilibili.com">哔哩哔哩客户端</a>
            <br/>扫码登录
            <br/>或扫码下载App
        </p>
    )
}

/*
    Login-Left
*/

const LoginLeft = () =>{
    return (
        <div className="login-left">
            <QRcodeCon />
            <QRcodeFooter />
        </div>
    )
}

export default LoginLeft;