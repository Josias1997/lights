import React from 'react';
import styles from './Paginator.less';

const Paginator = props => {
    const {pages, handleClick, current} = props;
    const pagesArray = [];
    console.log(pages);
    for(let i = 1; i <= pages; i++){
        pagesArray.push(i)
    }
    return (
        <div className={styles.Paginator}>
                {
                pagesArray.map(page => (
                    <div key={page}
                        onClick={() => handleClick(page)}
                        className={current === page ?
                            styles.Link + " " + styles.active :
                        styles.Link}
                    >
                        {page}
                    </div>
                ))
            }
        </div>
    )
};

export default Paginator;