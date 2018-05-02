import React from 'react';
import list_data from '../helpers/list_data';
// import ListData from './helpers/list';

export default (props) => {
    console.log(list_data);
    const listElements = list_data.map((item, index) => {
        return <li key={index} className="collection-item">{item.title}</li>
    })

    return (
        <div>
            <ul className="collection">
                {listElements}
            </ul>
        </div>
    )
}
