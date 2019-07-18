import React, {Component} from 'react';
import Card from "./CustomCard/CustomCard";
import Roll from 'react-reveal/Roll';
import styles from './Grid.less';
import {connect} from 'react-redux';
import CustomModal from "../MyModal/MyModal";

class Grid extends Component {
    state = {
        open: false,
        selectedId: '',
    };
    handleClick = id => {
        console.log(id);
        this.setState({
            open: true,
            selectedId: id
        })
    };
    handleClose = () => {
        this.setState({
            open: false,
            selectedId: ''
        })
    };

    render() {
        let elements = this.props.articles;
        if (this.props.type !== 'articles') {
            elements = this.props.offers;
        }
        let content = <div className={styles.Grid}>
            {elements.map(element => (
                <Card key={element.id}
                      card={element}
                      single={false}
                      handleClick={this.handleClick}
                />
            ))}
        </div>;
        return (
            <Roll left>
                {content}
                <CustomModal id={this.state.selectedId}
                             open={this.state.open}
                             close={this.handleClose}
                             type={this.props.type}
                />
            </Roll>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.blog.articles,
        offers: state.offer.offers,
        error: state.blog.error
    }
};

export default connect(mapStateToProps)(Grid);