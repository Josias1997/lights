import React from 'react';

const Picture = props => {
	const {id, url, title, click} = props;
	return (
		<div className={"mb-3 fadeIn"}>
            <figure className="figure">
                <a href="#" onClick={() => click(id)}>
                    <img className="img-fluid" src={url} alt={title}/>
                </a>
            </figure>
        </div>
	)
};

export default Picture;