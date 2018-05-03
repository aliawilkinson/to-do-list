import React from 'react';

export default (props) => {

    if (!props.data.length) {
        return <h1 className="center grey-text">No To Do Items!</h1>
    }

    const listElements = props.data.map((item, index) => {
        return <li key={index} className="collection-item">{item.title}</li>
    })

    return (
        <ul className="collection">
            {listElements}
        </ul>
    )
}
