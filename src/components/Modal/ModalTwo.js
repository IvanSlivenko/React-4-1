import { Component } from "react";
import { createPortal } from "react-dom";
import './Modal.scss';

const modalRootTwo = document.querySelector('#modal-rootTwo');

export default class ModalTwo extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === `Escape`) {
            this.props.onClose();
        }
    };
    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };



    render() { 

        return createPortal(
            <div className="backdrop" onClick={this.handleBackdropClick}>
                <div className="content" onClick={this.props.children}></div>
            </div>,
            modalRootTwo,
        );
    }
}

