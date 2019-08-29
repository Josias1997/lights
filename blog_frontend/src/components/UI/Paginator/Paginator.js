import React from 'react';

const Paginator = props => {
    const {pages, handleClick, current} = props;
    const pagesArray = [];
    for(let i = 1; i <= pages; i++){
        pagesArray.push(i);
    }
    return (
        <nav className={"Page navigation example mt-5 ml-5"}>
            <ul className={"pagination pagination-circle pg-dark"}>
                {
                pagesArray.map(page => (
                    <li key={page}
                        onClick={() => handleClick(page)}
                        className={current === page ?
                            "page-item active" : "page-item"}
                    >
                        <a className={"page-link"}>
                           {page}
                        </a>
                    </li>
                ))
            }
            </ul>
        </nav>
    )
};

export default Paginator;