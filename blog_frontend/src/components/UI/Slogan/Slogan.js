import React from 'react';
import styles from './Slogan.less';

const Slogan = props => {
    const {title, subtitle} = props;
    return (
        <div className={styles.Slogan}>
             <h1 className={styles.title}>{title}</h1>
            <h1 className={"subtitle"}>{subtitle}</h1>
        </div>
    )
};

export default Slogan;