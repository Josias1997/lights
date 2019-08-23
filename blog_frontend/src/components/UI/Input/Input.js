import React from 'react';

const Input = props => {
    const {type, id, label, colLength, mb, change, value} = props;
    let content = <input type={type} id={id} name="name"
                         className="form-control"
                         value={value} onChange={event => change(event)}/>;
    if (type === 'textarea') {
        content = <textarea id="message" name="message" rows="2"
                            className="form-control md-textarea"
                            value={value}
                            onChange={event => change(event)}
        >

        </textarea>;
    }
    return (
        <div className={"col-md-" + colLength}>
            <div className={mb ? "md-form mb-0:":"md-form"}>
                {content}
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    )
};

export default Input;