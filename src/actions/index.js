export const toggleShowActiveFlag = () => ({
    type: 'TOGGLE_SHOW_ACTIVE',
});

export const createUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').add({
            ...user,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'REFRESH_DATA'});
        }).catch((err) => {
            dispatch({type: 'REFRESH_DATA_ERROR', err});
        })
    }
}

export const deleteUser = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        dispatch({type: 'UNSET_ITEM'});
        firestore.collection('users').doc(id).delete().then(() => {
            dispatch({type: 'REFRESH_DATA'});
        }).catch((err) => {
            dispatch({type: 'REFRESH_DATA_ERROR', payload: err});
        })
    }
}
    
export const updateUser = user => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(user.id).update({
            ...user
        }).then(() => {
            dispatch({type: 'REFRESH_DATA'});
        }).catch((err) => {
            dispatch({type: 'REFRESH_DATA_ERROR', payload: err});
        })
    }
}

export const findItemToEdit = searchParams => ({
    type: 'ITEM_TO_EDIT',
    payload: searchParams,
});

export const unsetItem = () => ({
    type: 'UNSET_ITEM',
});