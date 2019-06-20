import React from 'react';
import styles from "./Title.less";

const Title = props => {
    const {name, type, styleClass} = props;
    let classes = [];
    let content = null;
    if (type === 'Category') {
        const {id} = props;
        classes.push(id <= 3 ? styleClass[0] : styleClass[1]);
        switch(id) {
            case 1:
                classes.push(styles.category1);
                break;
            case 2:
                classes.push(styles.category2);
                break;
            case 3:
                classes.push(styles.category3);
                break;
            case 4:
                classes.push(styles.category4);
                break;
            case 5:
                classes.push(styles.category5);
                break;
            case 6:
                classes.push(styles.category6);
                break;
        }

        content = <div>
            <div className={classes.join(" ")}>
                <p>{name}</p>
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