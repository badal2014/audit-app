import React from 'react';

export default class EditModal extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        console.log(this.props.editedData[0].invId);
        
        return(
            <div>
                <div className="editModal">
                    <label>Inventory id</label><input type="text" value={this.props.editedData[0].invId}/><br/>
                    <label>Inventory Name</label><input type="text" value={this.props.editedData[0].invName}/><br/>
                    <label>Inventory Brand</label><input type="text" value={this.props.editedData[0].invBrand}/><br/>
                    <label>Inventory Type</label><select value={this.props.editedData[0].type}>
                        <option>Laptop</option>
                        <option>Mouse</option>
                        <option>Charger</option>
                        <option>Mobile</option>
                        <option>Tablet</option>
                        <option>Monitor</option>
                        <option>Keyboard</option>

                    </select><br/>
                    <button type="button">Done</button>
                    <button type="button" onClick={() =>this.props.editInventory()}>Close</button>
                </div>
            </div>
        )
    }
}