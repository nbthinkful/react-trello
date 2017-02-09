import React from 'react'
import List from './list'

export default function Board(props) {
    let lists = [];

    for (let i=0; i<props.lists.length; i++) {
        lists.push(<List title={props.lists[i]} cards="This is a card"/>);
    }

    return (
        <div className="board">
            <h1>{props.title}</h1>
            {lists}
        </div>
    );
} 