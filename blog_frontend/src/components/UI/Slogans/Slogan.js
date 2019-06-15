import React from 'react';

const Slogan = props => {
    const {title, subtitle} = props;
    return (
        <div className={"Slogan"}>
             <h1 className={"title"}>{title}</h1>
            <h1 className={"subtitle"}>{subtitle}</h1>
        </div>
    )
};

export default Slogan;