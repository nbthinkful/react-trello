import React from 'react'
import Card from './card'

export default function List(props) {
    return (
        <div className="card-list">
            <h2>{props.title}</h2>
            <Card text={props.cards}/>
            <Card text={props.cards}/>
            <Card text={props.cards}/>
        </div>
    );
}