import React from 'react';

const Title = props => {
    const {name, type, styleClass} = props;
    let content = null;
    if (type === 'Category') {
        const {id} = props;
        content = <div>
            <div                className={
                    id <= 3 ? styleClass[0] : styleClass[1]
                }
                id={"category-" + id}>
                <p
            >{name}</p>
            </div>
        </div>
    }
    else if(type === 'MultipleCategory') {
        content =  <div className={styleClass}>
                  <p>{name}</p>
                </div>
    }
    return (
        content
    )
};

export default Title;