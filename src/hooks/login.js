import React, { useState, useEffect } from 'react';
import data from './data.json';
import {connect} from 'react-redux';
import {loginData} from '../redux/login/action';

function CheckLogin(enterEmail, enterPass, defaultD, setEnterPass, setEnterEmail,props) {
    if(defaultD.filter(e => {return enterEmail == e.email && enterPass == e.password}).length>0){
        props.history.push("../home")
        setEnterPass('');
        setEnterEmail('');
    }else{alert("Wrong Credentials");}
}

function LoginPage(props) {
    const [defaultD] = useState(data);
    const [enterEmail, setEnterEmail] = useState("");
    const [enterPass, setEnterPass] = useState("");

    const handleChange = e => { setEnterEmail(e.target.value); }
    const handlePassword = e => { setEnterPass(e.target.value); }

    console.log("props" ,props)
    return (
        <div>
            <label>Email</label>
            <input type="email" value={enterEmail} onChange={(e) => handleChange(e)} /><br />
            <label>Password</label>
            <input type="password" value={enterPass} onChange={(e) => handlePassword(e)} /><br />

            <button onClick={(e) => this.props.dispatch(loginData())}>Sign In</button>
        </div>
    )
}
const mapStateToProps = (e) => {
    console.log("badal" ,e);
    
    return {
        loginData : e.loginData
    }
    
}
export default connect(mapStateToProps)(LoginPage); 
