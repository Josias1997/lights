import React, {Component} from 'react';
import CustomCard from "./CustomCard/CustomCard";
import Fade from 'react-reveal/Fade';
import styles from './Grid.less';
import {connect} from 'react-redux';
import MyModal from "../MyModal/MyModal";
import Paginator from "../Paginator/Paginator";

class Grid extends Component {
    state = {
        open: false,
        selectedId: '',
        itemsPerPages: 6,
        elements: this.props.type !== 'articles' ?
            this.props.offers : this.props.articles,
        currentElements: [],
        currentPage: 1,
        pages: 0,
    };
    componentWillMount() {
        this.setState({
            currentElements: this.state.elements.slice(0, this.state.itemsPerPages)
        })
    }

    componentDidMount() {
        this.setState({
            pages: Math.ceil(this.state.elements.length / 6)
        });
    }
    handleClick = id => {
        console.log(id);
        this.setState({
            open: true,
            selectedId: id
        })
    };
    handlePageClick = page => {
        const begin = this.state.itemsPerPages * (page - 1);
        const end = this.state.itemsPerPages * page;
        this.setState({
            currentElements: this.state.elements.slice(begin, end),
            currentPage: page
        })
    };
    handleClose = () => {
        this.setState({
            open: false,
            selectedId: ''
        })
    };

    render() {
        let content = <div>
            <div className={styles.Grid}>
                {this.state.currentElements.map(element => (
                    <CustomCard key={element.id}
                                card={element}
                                single={false}
                                handleClick={this.handleClick}
                    />
                ))}
            </div>
            <MyModal id={this.state.selectedId}
                         open={this.state.open}
                         close={this.handleClose}
                         type={this.props.type}
            />
            <Paginator
                pages={this.state.pages}
                handleClick={this.handlePageClick}
                current={this.state.currentPage}
            />
        </div>;
        return (
            !this.props.isOpen ?
                <Fade top>
                    {content}
                </Fade> : <div>
                    {content}
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.main.isOpen,
        articles: state.blog.articles,
        offers: state.offer.offers,
        error: state.blog.error
    }
};

export default connect(mapStateToProps)(Grid);