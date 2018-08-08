import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImageGallery from '../components/ImageGallery/ImageGallery.component';
import { requestImageGallery } from '../actions/imageGallery.actions';

class ImageGalleryContainer extends Component {
    componentDidMount() {
        this.props.requestImageGallery();
    }

    render() {
        const { roverImages } = this.props.imageGallery;
        return (
            <ImageGallery roverImages={roverImages} />
        );
    }
}

function mapStateToProps(state) {
    return {
        imageGallery: state.imageGallery
    }
}

const mapDispatchToProps = {
    requestImageGallery
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGalleryContainer);