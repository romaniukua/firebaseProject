import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { findItemToEdit, deleteUser } from '../../actions';
import Icon from '../Icon';
import style from './style.module.scss';

const UserItem = (props) => {
    const { id, firstName, lastName } = props.userProps;
    const { arrToSearch, findItemToEdit, deleteUser } = props;
    const searchParams = {
        arrToSearch,
        id
    }
    return (
        <li className="list-group-item row d-flex justify-content-between align-items-center col-12">
            <div className="wrapper__text">
                <Link to={`/users/${id}`}>{lastName} {firstName}</Link>
            </div>
            <div className="wrapper__buttons">
                <button className={style.icon} data-toggle="modal" data-target="#myModal"  onClick={() => findItemToEdit(searchParams)}>
                    <Icon name='edit'/>
                </button>
                <button className={style.icon} onClick={() => deleteUser(id)}>
                    <Icon name='delete'/>
                </button>
            </div>
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
        arrToSearch: state.firestore.ordered.users
    }
}

export default connect(mapStateToProps, {findItemToEdit, deleteUser})(UserItem);