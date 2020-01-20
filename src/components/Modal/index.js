import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser, updateUser } from '../../actions';
const $ = window.$;

class Modal extends Component {
    state = {};

    static getDerivedStateFromProps(nextProps, prevState){
        const { userProps } = nextProps;
        if(userProps.id !== prevState.id){
            return {
                ...userProps
            }
        }
        return null;
    }

    handleChange = (e) => {
        const {name, value, checked, type} = e.target;
        if(type === "checkbox"){
            this.setState({
                [name]: checked,
            });
        }else{
            this.setState({
                [name]: value,
            });
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault(this.state);
        const { id, ...rest } = this.state;
        const { createUser, updateUser } = this.props;
        
        if(id){
            const data = {
                id: id,
                ...rest
            }
            updateUser(data);
        }else{
            const data = {
                ...rest
            }
            createUser(data);
            this.clearForm();
        }
        
        $('#myModal').modal('hide');
    }

    clearForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            phoneNum: '',
            isActive: true,
        });
    }
    
    render() {
        const { firstName, lastName, phoneNum, isActive } = this.state;
        return (
            <div className="modal fade" id='myModal' tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModalLabel">Add user</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="modal-form" className="w-75 mx-auto" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" id="firstName" name="firstName" className="form-control" value={firstName} onChange = {this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" id="lastName" name="lastName" className="form-control" value={lastName} onChange = {this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNum">Phone number</label>
                                    <input type="text" id="phoneNum" name="phoneNum" className="form-control" value={phoneNum} onChange = {this.handleChange} required />
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="isActive" name='isActive' onChange = {this.handleChange} checked={isActive}/>
                                    <label className="form-check-label" htmlFor="isActive">
                                        Active user
                                    </label>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {createUser, updateUser})(Modal);