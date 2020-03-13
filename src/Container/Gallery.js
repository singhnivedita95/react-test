import React, { Component } from "react";
import _ from 'lodash';
import Modal from '../Component/Modal';
import './Gallery.css';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg",
                "https://image.freepik.com/free-photo/gardens-mums_62972-43.jpg",
                "https://image.freepik.com/free-photo/red-roses-bouquet-table_140725-828.jpg",
                "https://image.freepik.com/free-photo/siam-tulip-curcuma-flower-thailand-white-background_62678-507.jpg",
                "https://image.freepik.com/free-vector/beautiful-vintage-floral-bouquet_52683-30545.jpg",
                "https://image.freepik.com/free-vector/pink-rose-flower-decoration-vintage-watercolor-style_73414-628.jpg",
                "https://image.freepik.com/free-vector/floral-design-wedding-invitation_53876-87364.jpg",
                "https://image.freepik.com/free-vector/floral-card_53876-91231.jpg",
                "https://image.freepik.com/free-vector/bouquet-card-special-occasion-creative-watercolor_83728-1052.jpg"
            ],
            isModalShow: false,
            dragIndex: 0,
            dropIndex: 0,
        };
    }

    onDragStartAction(data, e) {
        e.dataTransfer.setData('index', data);
    }
    onDragOverAction(e) {
        e.preventDefault();
    }
    onDropAction(e) {
        this.setState({
            isModalShow: true,
            dragIndex: e.dataTransfer.getData('index'),
            dropIndex: e.currentTarget.dataset.item
        })
    }

    replaceImage = () => {
        const {dropIndex, dragIndex} = this.state;
        let ary = _.cloneDeep(this.state.images);
        let temp = ary[dropIndex];
        ary[dropIndex] = ary[dragIndex];
        ary[dragIndex] = temp
        // ary.splice(dragIndex, 1);
        this.setState({
            images: ary,
            isModalShow: false
        })
    };

    closeModal = () => {
        this.setState({
            isModalShow: false
        })
    };
    render() {
        const {className,activeIndex} = this.state
        return (
            <div className={'container'}>
                <div className={'d-flex row'}>
                <Modal show={this.state.isModalShow} replaceImage={this.replaceImage} closeModal={this.closeModal}/>
                {
                    this.state.images.map((item, index) => {
                        return(

                                <div
                                    data-item={index}
                                    draggable={true}
                                    onDragStart={this.onDragStartAction.bind(this, index)}
                                    onDragOver={this.onDragOverAction.bind(this)}
                                    onDrop={this.onDropAction.bind(this)}
                                    className={`col-md-3 col-sm-12 mt-3`}
                                >
                                    <div className={`wrapper`}>
                                        <img className={'img-responsive'} data-item={index} src={item} alt={'...'}/>
                                        <div className="overlay-replace-text">
                                            <div className="text">REPLACE IMAGE</div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
            </div>
        );
    }
}

export default Gallery;
