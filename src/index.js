import React from 'react'
import ReactDOM from 'react-dom'

import LoginLeft from './login-left'

const Loading = () =>{
    return (
        <div>
            Loading...
            
        </div>
    )
}

// class LoginForm extends React.Component{
//     constructor(){
//         super();
//         this.state = {};
//     }
    
//     render(){
//         return(
//             <div>
//                 <TypeTab />
//                 <Username />
//                 <Password />
//             </div>
//         )
//     }
// }

// const LoginRight = () =>{
//     return (
//         <div className="login-right">
//             <LoginForm />
//             <Remember />
//             <BtnBox />
//             <SnsBox />
//         </div>
//     )
// }

ReactDOM.render(<LoginLeft />, document.getElementById('root'))