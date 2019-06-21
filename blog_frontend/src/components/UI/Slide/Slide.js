import React, { Component } from 'react';
import Coverflow from 'react-coverflow';

class Slide extends Component {
    render() {
        return(
            <Coverflow
                width={960}
                height={480}
                displayQuantityOfSide={2}
                navigation
                enableHeading
                infiniteScroll
                media={{
                    '@media (max-width: 900px)': {
                      width: '600px',
                      height: '300px'
                    },
                    '@media (min-width: 900px)': {
                      width: '960px',
                      height: '600px'
                    }
}}
            >
                <div
                    role="menuitem"
                    tabIndex="0"
                >
                    {this.props.images.map(image => {
                    return <img src={image.url} alt={image.url}/>
                })[0]}

                </div>
                {this.props.images.map(image => {
                    return <img src={image.url} alt={image.url}/>
                })}
            </Coverflow>
        )
    }
}
export default Slide;