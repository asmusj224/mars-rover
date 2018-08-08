import * as actions from '../constants/actions';
import { sample } from 'lodash';
const ImageOfTheDayReducer = (state = [], action) => {
    switch (action.type) {
        case actions.RECEIVE_IMAGE_OF_THE_DAY:
            const { payload: { photos } } = action;
            // const { photos } = payload;
            const randomRoverImage = sample(photos);
            return {
                ...state,
                roverImage: randomRoverImage.img_src,
                roverName: randomRoverImage.rover.name,
                roverCameraName: randomRoverImage.camera.full_name

            }
        default:
            return state
    }
}

export default ImageOfTheDayReducer;