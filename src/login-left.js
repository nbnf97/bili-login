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
    constructor(){
        super()
        this.state = {
            isQRcodeLoaded: true,
            isTimeOver: false,
        }
    }

    componentDidMount(){
        this.tick()
    }

    tick(){
        setTimeout(
            ()=>{this.setState({isTimeOver: true,})},
            3000
        )
    }

    handleRefresh = () =>{
        this.setState({
            isTimeOver: false
        })
        this.tick()
    }

    render() {
        return(
            <div className="qrcode-con">
                <div className="tv-icon" />
                <div className="qrcode-box" >
                    <div className="qrcode-tips" />
                    <div className="qrcode-img" />
                    <Status show={this.state} refresh={this.handleRefresh} />
                </div>
            </div>
        )
    }
}

const Status = (props) =>{
    const show = "status"
    const hidden = "status hidden"
    const className = props.show.isTimeOver ? show : hidden

    return (
        <div className={className} >
            <div class="overdue" onClick={props.refresh}>点击刷新</div>
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