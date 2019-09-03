import React from 'react';


const LoadComponent = props => {
    const {loading, error, children} = props;
    let content = <div className={"spinner-border text-danger"} style={{
        height: 300 + 'px'
    }}>
        <span className={"sr-only"}>Loading...</span>
    </div>;
    let errorMessage = "Oops Problèmes de chargement des images :(";
    if (props.component) {
        content = <div className={"spinner-border text-danger"}>
            <span className={"sr-only"}>Loading...</span>
        </div>;
        errorMessage = "Oops erreur serveur :=(";
    }
    if(loading && !error) {
        content = children
    }
    else if (error) {
        content = <div>{errorMessage}</div>;
    }
    return (
        content
    )
};

export default LoadComponent;