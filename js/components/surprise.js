import React from 'react';
import ReactDOM from 'react-dom';

function SoundCloudEmbed(props) {
    const playerUrl = 'https://w.soundcloud.com/player/';
    const trackUrl = `https://api.soundcloud.com/tracks/${props.trackId}`;
    const options='auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true';
    const src = `${playerUrl}?url=${trackUrl}&${options}`;

    const frameStyle= {
        border:'none'
    };

    return <iframe width="100%" height="450" scrolling="no" style={frameStyle} src={src}></iframe>;
}

function Button(props) {
    return <button onClick={props.onClick}>{props.text}</button>;
}

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked:false
        };
        this.onButtonClick=this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({
            clicked:true
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.onButtonClick} text='Ready to be amazed'/>
                {this.state.clicked ? <SoundCloudEmbed trackId='191075550'/>:null}
            </div>
        );
    }
}