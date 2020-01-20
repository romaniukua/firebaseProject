import React, { Component } from 'react';
import Modal from '../Modal';
import UserItem from '../UserItem';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleShowActiveFlag, unsetItem } from '../../actions';
import { firestoreConnect } from 'react-redux-firebase';


class UsersList extends Component {
    
    render() {
        const { users, showActive, itemToEdit, toggleShowActiveFlag, unsetItem } = this.props;

        const elements = users.map(item => {
            const {id, isActive} = item;
            if(showActive){
                return isActive ? <UserItem key={id} userProps = {item}/> : null;
            }
            return <UserItem key={id} userProps = {item}/>
        });

        return (
            <div className="container">
                <h1 className='text-center my-3'>Users List</h1>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-info" type="button" onClick={unsetItem} data-toggle="modal" data-target="#myModal">New User</button>
                    <button className="btn btn-outline-info" onClick={toggleShowActiveFlag}>{showActive ? 'Show all users' : 'Show only active users'}</button>
                </div>
                <ul className="list-group list-group-flush">
                    {elements}
                </ul>
                <Modal userProps={itemToEdit !== null ? users[itemToEdit] : { id: '', firstName: '', lastName: '', phoneNum: '', isActive: true }} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { showActive, itemToEdit } = state.user;
    const users = state.firestore.ordered.users || [];
    return {
        users,
        showActive,
        itemToEdit
    }
}

export default compose(
    connect(mapStateToProps, { toggleShowActiveFlag, unsetItem }),
    firestoreConnect([
        {collection: 'users'}
    ])
)(UsersList)


