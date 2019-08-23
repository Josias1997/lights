import React, {Component} from 'react';
import truncate from "../../../../helpers/truncate";
import styles from './CustomCard.less';
import axios from 'axios';
import {
    makeStyles, Card,
    CardMedia, CardContent, CardActionArea,
    Button, Typography, CardActions
} from "@material-ui/core";
import DropdownForm from "../../DropdownForm/DropdownForm";


class CustomCard extends Component {
    state = {
        card: {
            width: 96 + '%',
            height: 300
        },
        media: {
            width: 100 + '%',
            height: 140
        },
    };

    sendReservation = () => {
        const data = this.props.card;
    };

    render() {
        const classes = this.state;
        const {card, single} = this.props;
        const {id, title, url, price} = card;
        let content = null;
        if (!single) {
            const {handleClick} = this.props;
            let truncatedContent = truncate(card.content, 50, null);
            content = <div className={styles.Card} onClick={() => handleClick(id)}>
                <Card className={classes.card}>
                    <CardActionArea href={""}>
                        <CardMedia
                            component={"div"}
                            className={classes.media}
                            image={url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant={"h5"} component={"h5"}>
                                {title}
                                {price !== undefined ? (<strong> ${price}</strong>) : null}
                            </Typography>
                            <Typography variant={"body2"} color={"textSecondary"}
                                        component={"p"}>
                                {truncatedContent}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href={""}
                                size={"small"}
                                color={"primary"}
                                onClick={() => handleClick(id)}>
                            Détails
                        </Button>
                    </CardActions>
                </Card>
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
                <DropdownForm/>
            </div>
        }
        return (
            content
        );
    }

}

export default CustomCard;

