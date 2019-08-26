import React from 'react';


const LoadComponent = props => {
    const {loading, error, children} = props;
    let content = <div style={{
            height: 700 + 'px'
        }}>
            <div className={"spinner-border text-primary"} >
                <span className={"sr-only"}>Loading...</span>
            </div>
        </div>;
    if(loading && !error) {
        content = children
    }
    return (
        content
    )
};

export default LoadComponent;