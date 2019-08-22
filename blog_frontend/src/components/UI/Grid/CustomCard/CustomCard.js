import React from 'react';
import truncate from "../../../../helpers/truncate";
import styles from './CustomCard.less';
import {makeStyles, Card,
    CardMedia, CardContent, CardActionArea,
    Button, Typography, CardActions
} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        width: 96 + '%',
        height: 300
    },
    media: {
        width: 100 + '%',
        height: 140
    },
});

const CustomCard = props => {
    const classes = useStyles();
    const {card, single} = props;
    const { id, title, url, price} = card;
    let content = null;
    if (!single) {
        const {handleClick} = props;
        let truncatedContent = truncate(card.content, 50, null);
        content = <div className={styles.Card} onClick={() => handleClick(id)} data-toggle={"modal"} data-target={"#myModal"}>
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
                            {price !== undefined ? (<strong> ${price}</strong>):null}
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
                {price !== undefined ? (<h3 className={"badge badge-primary"}>Prix: {price}</h3>):null}
                <p className={"text-justify"}>{card.content}</p>
            </div>
        </div>
    }
    return (
        content
    );
};

export default CustomCard;

