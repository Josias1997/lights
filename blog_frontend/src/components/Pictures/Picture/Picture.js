import React from 'react';

const Picture = props => {
    const image = props.simple ? (<div>
         <img src={props.url} alt={props.url}/>
    </div>) : (<div>
        <img src={props.url} alt={props.url}/>
        <p>
            {props.description}
        </p>
    </div>);
    return (
        {image}
    );
};

export default Picture
