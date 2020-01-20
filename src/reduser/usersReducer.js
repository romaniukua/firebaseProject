const defaultStore = {
    showActive: false,
    itemToEdit: null,
};

const reducer = (store = defaultStore, {type, payload}) => {
    switch(type){
        case 'TOGGLE_SHOW_ACTIVE': {
            store.showActive = !store.showActive;
            return store;
        }
        case 'REFRESH_DATA_ERROR': {
            return store;
        }
        case 'REFRESH_DATA': {
            return store;
        }
        case 'ITEM_TO_EDIT': {
            const { arrToSearch, id } = payload;
            store.itemToEdit = arrToSearch.findIndex(item => item.id === id);
            return store;
        }
        case 'UNSET_ITEM': {
            store.itemToEdit = null;
            return store;
        }
        default: {
            return store
        }
    }
}

export default reducer;