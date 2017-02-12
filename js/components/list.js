import React from 'react'
import Card from './card'

export default function List(props) {
    return (
        <div className="card-list">
            <h2>{props.title}</h2>
            {props.cards}
            {/*<Card text={props.cards}/>
            <Card text={props.cards}/>
            <Card text={props.cards}/>*/}

            <form method="get" onSubmit={props.onAddSubmit}>
                <input type="text" name="card-text" onChange={props.onAddInputChanged}/>
                <input type="submit"/>
            </form>
        </div>
    );
}