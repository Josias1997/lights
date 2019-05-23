import React, { Component } from 'react';
import Picture from './Picture/Picture';

class Pictures extends Component {
    state = {
        type: '',
        pictures: []
    };
    render() {
        return (
            <div>
                {this.props.pictures.map(picture => {
                return <Picture key={picture.id} url={picture.url}/>
            })}
            </div>
        );
    }
}

export default Pictures;
