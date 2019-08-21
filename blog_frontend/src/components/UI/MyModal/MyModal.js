import React from 'react';
import OffersModalContent from "./OffersModal/OffersModal";
import BlogModalContent from "./BlogModal/BlogModal";
import HomeModalContent from "./HomeModal/HomeModal";

const MyModal = props => {

    const {id, open, close, type} = props;
    let content = null;
    if (open) {
        if (type === 'offers') {
            // content = <CustomCard card={this.state.elements} single={true}/>
            content = <OffersModalContent id={id}/>
        } else if (type === 'articles') {
            content = <BlogModalContent id={id}/>
        } else if (type === 'categories') {
            // content = <CustomCarousel images={this.state.elements} auto={true} interval={2000}/>
            content = <HomeModalContent id={id}/>
        }
    }

    return (
        < div className="modal fade" id="myModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden={open}>
            < div className="modal-dialog modal-dialog-centered" role="document">
                < div className="modal-content">
                    < div className="modal-header">
                        < h5 className="modal-title" id="exampleModalLongTitle">
                            Modal title
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    < div
                        className="modal-footer">
                        < button type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            onClick={close}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>);
};

export default MyModal;