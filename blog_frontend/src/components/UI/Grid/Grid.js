import React, {Component} from 'react';
import Card from "./Card/Card";
import Roll from 'react-reveal/Roll';
import './Grid.css';
import CustomModal from "../Modals/CustomModal/CustomModal";


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
        return (
            <Roll left>
                <div className={"Grid"}>
                    {this.props.elements.map(element => (
                        <Card key={element.id}
                              card={element}
                              single={false}
                              handleClick={this.handleClick}
                        />
                    ))}
                </div>
                <CustomModal id={this.state.selectedId}
                           open={this.state.open}
                           close={this.handleClose}
                           type={this.props.type}
                />
            </Roll>
        )
    }
}

export default Grid;