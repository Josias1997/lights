import React from 'react';
import styles from './Slogan.less';

const Slogan = props => {
    const {title, subtitle} = props;
    return (
        <div className={styles.Slogan}>
             <h2 className={"h1-responsive display-4"}>
                 <strong>{title}</strong>
             </h2>
            <p className={"lead"}>{" " + subtitle}</p>
        </div>
    )
};

export default Slogan;