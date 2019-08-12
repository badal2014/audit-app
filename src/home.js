import React from 'react';
import{inventoryData} from './redux/login/action';
import { connect } from 'react-redux';
import EditModal from './editModal';
import { throwStatement } from '@babel/types';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            inventories: [],
            editModal: false,
            editedData: [],
            loader: false
        }
    }
    logOut() {
        sessionStorage.removeItem("token");
        this.props.history.push("/");
    }

    componentWillMount(nextprops) {
        if(sessionStorage.getItem('token') == null){
            this.props.history.push('/')
        } else {
            this.props.dispatch(inventoryData())
            console.log("nextPROEPE" , nextprops)
        }
    }
    componentWillReceiveProps(nextprops){
        if(nextprops.loginData.login.inventory.loading == true){
            this.setState({
                loader:true
            })            
        }else{
            this.setState({
                loader: false
            })
        }
        console.log("in receive props",nextprops.loginData.login.inventory.success == true)
        if(nextprops.loginData.login.inventory.success == true){
            this.setState({
                inventories: nextprops.loginData.login.inventory.data
            })
        }
    }
    editInventory(id){
        console.log(id);
        var x = this.state.inventories.filter(f => {
            return f._id == id
        })
        console.log(x);
        this.setState({
            editModal: !this.state.editModal,
            editedData : x
        })
    }
    render() {
        console.log(this.state.loader);
        return (
            <div>
                <h1>In Home Page</h1>
                <h3>{this.state.loader ? "Loading" : "successfully loaded"}</h3>
                <table>
                    <thead>
                        <th>Inventory Type</th>
                        <th>Inventory Name</th>
                        <th>Inventory Brand</th>
                        <th>Inventory Id</th>
                    </thead>
                    <tbody>
                        {this.state.inventories != null ? 
                        this.state.inventories.map((data , key) => (<tr key={key}>
                            <td>{data.type}</td>
                            <td>{data.invName}</td>
                            <td>{data.invBrand}</td>
                            <td>{data.invId}</td>
                            <td><button type="button" onClick={() => this.editInventory(data._id)}>Edit</button></td>

                        </tr>)) : null}
                    </tbody>
                </table>
                <button type="button" onClick={() => this.logOut()}>Logout</button>
                {this.state.editModal ? <EditModal {...this.props} {...this.state} editInventory={() =>this.editInventory()}/> : null}
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
export default connect(mapStateToProps)(HomePage);
// export default HomePage;