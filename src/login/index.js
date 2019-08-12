import React from 'react';
// import LoginPage from '../hooks/login';
import { connect } from 'react-redux';
import { loginData } from '../redux/login/action';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: "",
            password: "",
            loader : false,
            error: false,
        }
    }
    componentWillReceiveProps(nextprops) {
        if(nextprops.loginData.login.login.loading){
            this.setState({
                loader: true
            })
        }else{
            this.setState({
                loader:false
            })
        }
        if(nextprops.loginData.login.login.error){
            this.setState({
                error: true
            })
        }else{
            this.setState({
                error: false
            })
        }
        if(nextprops.loginData.login.login.success == true){
            this.props.history.push("/home")
        }
    }
    handleChange(e) {
        if (e.target.id == "email") {
            this.setState({
                empId: e.target.value
            })
        } else if (e.target.id == "password") {
            this.setState({
                password: e.target.value
            })
        }
    }
    submit() {
        let payload = {
            empId: this.state.empId,
            password: this.state.password
        }
        this.props.dispatch(loginData(payload))
    }
    render() {
        console.log("props", this.props.loginData.login.login.success);
        return (
            <div>
                <h1>In loginPage</h1>
                <label>Email</label>
                <input type="email" value={this.state.empId} id="email" onChange={(e) => this.handleChange(e)} /><br />
                <label>Password</label>
                <input type="password" value={this.state.password} id="password" onChange={(e) => this.handleChange(e)} /><br />
                <button onClick={(e) => this.submit(e)}>Sign In</button>
                <h3>{this.state.loader ? "Loading" : null}</h3>
                <h5>{this.state.error ? "Login Id and Passwor Is Incorrect " : null}</h5>
            </div>
        )
    }
}
const mapStateToProps = (e) => {
    console.log("badal", e);
    return {
        loginData: e
    }
}
export default connect(mapStateToProps)(Login);