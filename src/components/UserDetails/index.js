import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


class UserDetails extends Component{
    state = {
        userData: {},
    }

    componentWillReceiveProps(nextProps){
        const {arrToSearch} = nextProps;

        const { userId } = this.props.match.params;
        const target = arrToSearch.find(item => item.id === userId);
        this.setState({
            userData: {
                ...target
            }
        });
    }
    componentDidMount(){
        const {arrToSearch} = this.props;

        const { userId } = this.props.match.params;
        const target = arrToSearch.find(item => item.id === userId);
        this.setState({
            userData: {
                ...target
            }
        });
    }

    render(){
        const { firstName, lastName, phoneNum, isActive } = this.state.userData;
        return(
            <div className="container">
                <h1 className='text-center my-3'>User Details</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item row d-flex justify-content-between align-items-center col-12">
                        <span>Last Name:</span>
                        <span>{lastName}</span>
                    </li>
                    <li className="list-group-item row d-flex justify-content-between align-items-center col-12">
                        <span>First Name:</span>
                        <span>{firstName}</span>
                    </li>
                    <li className="list-group-item row d-flex justify-content-between align-items-center col-12">
                        <span>Phone Number:</span>
                        <span>{phoneNum}</span>
                    </li>
                    <li className="list-group-item row d-flex justify-content-between align-items-center col-12">
                        <span>isActive:</span>
                        <span>{isActive ? 'yes' : 'no'}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const arrToSearch = state.firestore.ordered.users || [];
    return {
        arrToSearch,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(UserDetails)
connect(mapStateToProps)(UserDetails);