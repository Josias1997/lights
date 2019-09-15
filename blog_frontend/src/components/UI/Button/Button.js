import React from 'react';

const Button = props => {
	const {type, styleClasses, value, click} = props;
	return (
		<button type={type} className={styleClasses} onClick={ !props.id ? () => click():() => click(props.id)}>
            {value ? value:null}
           {props.children ? props.children:null}

        </button>
	)
}

export default Button;