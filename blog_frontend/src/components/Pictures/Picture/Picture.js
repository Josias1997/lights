import React from 'react';

const Picture = props => {
    const image = <div className={props.style}
    >
        <img
            src={props.url}
            alt={props.url}
        />
    </div>;
    return (
        {image}
    );
};

export default Picture
