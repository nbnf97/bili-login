import React from 'react'

import './styles/qrcode-footer.css'
import './styles/qrcode-con.css'

/*
    Login-Left
        二维码加载动画（con图片 footer文字）
        扫描成功情况（con图片 footer文字）
*/

class LoginLeft extends React.Component{
    state = {
        isTimeOver: false
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

    getRefreshMsg =(msg)=>{
        this.setState({
            isTimeOver: !msg
        })
        this.tick()
    }

    render(){
        return (
            <div className="login-left">
                <QRcodeCon timer={this.state.isTimeOver}
                            getMsg={this.getRefreshMsg}
                />
                <QRcodeFooter timer={this.state.isTimeOver}/>
            </div>
        )
    }
}

/*
    QRcode-Con
*/

class QRcodeCon extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isQRcodeLoaded: true,
            refresh: true,
            qrcodeBox: "qrcode-box"
        }
    }

    handleRefresh = () =>{
        this.props.getMsg(this.state.refresh)
    }

    handleMouseEnter = () =>{
        if (!this.props.timer){
            this.setState({
                qrcodeBox: "qrcode-box hover"
            })
        }
    }

    handleMouseLeave = () =>{
        if (!this.props.timer){
            this.setState({
                qrcodeBox: "qrcode-box"
            })
        }
    }

    render() {
        console.log(this.props)
        return(
            <div className="qrcode-con">
                <div className="tv-icon" />
                <div className={this.state.qrcodeBox} 
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}>
                    <div className="qrcode-tips " />
                    <div className="qrcode-img" />
                    <Status show={this.props} refresh={this.handleRefresh} />
                </div>
            </div>
        )
    }
}

const Status = (props) =>{
    const show = "status"
    const hidden = "status hidden"
    const className = props.show.timer ? show : hidden

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
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="qrcode-footer">
                <div className="Two2"></div>
                <div className="txt">
                    <StatusTxt timer={this.props.timer}/>
                    <AppLink />
                </div>
                <div className="Three3"></div>
            </div>
        )
    }
}

const StatusTxt = (props) => {
    if (props.timer){
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



export default LoginLeft;