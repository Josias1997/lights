import React, {Component} from 'react';
import truncate from "../../../../helpers/truncate";
import styles from './CustomCard.less';
import DropdownForm from "../../DropdownForm/DropdownForm";


class CustomCard extends Component {

    render() {
        const {card, single} = this.props;
        const {id, title, url, price} = card;
        let content = null;
        if (!single) {
            const {handleClick} = this.props;
            let truncatedContent = truncate(card.content, 50, null);
            content = <div className={styles.Card} onClick={() => handleClick(id)}>
                <div className="card ml-4 mt-4">
                    <div className="view overlay">
                        <img className="card-img-top"
                             src={url}
                             alt={title}/>
                            <a href="#" onClick={() => handleClick(id)}>
                                <div className="mask rgba-white-slight">
                                </div>
                            </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{title + " " + price}</h4>
                        <p className="card-text">{truncatedContent}</p>
                        <a href="#" className="btn btn-primary" onClick={() => handleClick(id)}>Détails</a>
                    </div>

                </div>
            </div>
        } else {
            content = <div className={"container"}>
                <div className={"view"}>
                    <img src={url} alt={url} className={"img-fluid"}/>
                    <div className={"pattern1 flex-center"}>
                        <p className={"white-text"}>{title}</p>
                    </div>
                </div>
                <div className={"container"}>
                    <h3 className={"badge badge-primary"}>Prix: {price}</h3>
                    <p className={"text-justify"}>{card.content}</p>
                </div>
                <DropdownForm offerId={id}/>
            </div>
        }
        return (
            content
        );
    }

}

export default CustomCard;

