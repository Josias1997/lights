import React from 'react';

const Title = props => {

    const {name, styleClass} = props;
    let content = <div className={styleClass}>
        <p>{name}</p>
    </div>;
    return (
        content
    )
};
export default Title;