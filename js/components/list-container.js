import React from 'react';
import List from './list';
import Card from './card';

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:props.title,
            inputText:'',
            cards:[]
        }

        this.addInputChanged = this.addInputChanged.bind(this);
        this.addSubmit = this.addSubmit.bind(this);
    }

    addInputChanged(event) {
        console.log('Text changed: ' + event.target.value);
    }

    addSubmit(event) {
        event.preventDefault();
        let value = event.target["card-text"].value;
        let cards = this.state.cards;
        cards.push(<Card text={value}/>);

        this.setState({
            cards:cards
        });
    }

    render() {
        return (
            <List title={this.state.title} cards={this.state.cards} onAddInputChanged={this.addInputChanged} onAddSubmit={this.addSubmit}/>
        );
    }
}