import React, {Component} from 'react';
import truncate from "../../../../helpers/truncate";
import styles from './CustomCard.less';
import DropdownForm from "../../DropdownForm/DropdownForm";
import Button from '../../Button/Button.js';


class CustomCard extends Component {

    render() {
        const {card, single} = this.props;
        const {id, title, url, price} = card;
        let content = null;
        if (!single) {
            const {handleClick} = this.props;
            let truncatedContent = truncate(card.content, 50, null);
            content = <div className={styles.Card} onClick={() => handleClick(id)}>
                <div className="card ml-4 mt-3">
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
                        <h4 className="card-title">{title + " " + price} DHS</h4>
                        <p className="card-text">{truncatedContent}</p>
                        <Button id={id} type="button" styleClasses="btn btn-danger" click={handleClick} value={"Détails"}/>
                    </div>

                </div>
            </div>
        } else {
            content = <div className={"row"} style={{
                width: 100 + '%',
                height: '50' + '%'
            }}>
                <div className={"col-md-6 mt-4"}>
                    <img src={url} alt={title} className={"img-fluid ml-3"}/>
                </div>
                <div className={"col-md-6 mt-4"}>
                    <p className={"text-justify ml-3"}>{card.content}</p>
                    <h1 className={"badge badge-success"}>Prix: {price} DHS</h1>
                    <DropdownForm offerId={id}/>
                </div>
            </div>
        }
        return (
            content
        );
    }

}

export default CustomCard;

