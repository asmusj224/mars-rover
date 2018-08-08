import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImageOfTheDay from '../components/ImageOfTheDay/ImageOfTheDay.component';
import { requestImageOfTheDay } from '../actions/imageOfTheDay.actions';

class ImageOfTheDayContainer extends Component {
    componentDidMount() {
        this.props.requestImageOfTheDay();
    }

    render() {
        const { roverImage, roverCameraName, roverName } = this.props.imageOfTheDay;
        return (
            <ImageOfTheDay roverImage={roverImage} roverName={roverName} roverCameraName={roverCameraName} />
        );
    }

}

function mapStateToProps(state) {
    return {
        imageOfTheDay: state.imageOfTheDay
    }
}

const mapDispatchToProps = {
    requestImageOfTheDay
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageOfTheDayContainer);