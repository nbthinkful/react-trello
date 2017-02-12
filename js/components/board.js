import React from 'react'
import ListContainer from './list-container'

export default function Board(props) {
    let lists = [];

    for (let i=0; i<props.lists.length; i++) {
        lists.push(<ListContainer title={props.lists[i]}/>);
    }

    return (
        <div className="board">
            <h1>{props.title}</h1>
            {lists}
        </div>
    );
} 