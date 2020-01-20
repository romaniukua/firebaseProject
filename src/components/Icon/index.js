import React from 'react';
import { ReactComponent as Edit } from './icons/pencil-edit-button.svg';
import { ReactComponent as Delete } from './icons/trash-alt-solid.svg';


const Icon = (props) => {
    const { name } = props;
    switch (name){
        case 'edit': 
            return <Edit/>;
        case 'delete':
            return <Delete/>
        default: 
            return <span>👺</span>
    }
}

export default Icon;