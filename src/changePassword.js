import React, { Component } from 'react'
import { connect } from 'react-redux';
import {changePassword } from './redux/changePassword/action';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
        }
    }
    componentWillReceiveProps(nextprops) {
        console.log("change pass", nextprops);

    }
    logOut() {
        sessionStorage.removeItem("token");
        this.props.history.push("/");
    }
    componentWillMount() {
        if (sessionStorage.getItem('token') == null) {
            this.props.history.push('/')
        }
    }
    handleChange(e){
        var id = e.target.id;
        
        if(id == "oldPass"){
            this.setState({
                oldPassword : e.target.value
            })
        }else if(id == "newPass"){
            this.setState({
                newPassword : e.target.value
            })
        }
    }
    submit(){
        let payload = {
            newPassword: this.state.newPassword,
            oldPassword: this.state.oldPassword
        }
        this.props.dispatch(changePassword(payload))
        
    }
    render() {
        console.log(this.state.oldPassword , this.state.newPassword);

        return (
            <div>
                <button type="button" onClick={() => this.logOut()}>LogOut</button>
                <input type="password" id="oldPass" onChange={(e) => this.handleChange(e)} value={this.state.oldPassword} placeholder="Current Password" />
                <input type="password" id="newPass" onChange={(e) => this.handleChange(e)} value={this.state.newPassword} placeholder="New Password" />
                <button type="button" onClick={() => this.submit()}>Change Password</button>
            </div>
        )
    }
}
const mapStateToProps = (e) => {
    console.log("changePassword", e);
    return {
        changePassword: e.password
    }
}
export default connect(mapStateToProps)(ChangePassword);
