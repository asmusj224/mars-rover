import * as actions from '../constants/actions';
import { sampleSize } from 'lodash';
const imageGalleryReducer = (state = [], action) => {
    switch (action.type) {
        case actions.RECEIVE_IMAGE_GALLERY:
            const { payload: { photos } } = action;
            // const { photos } = payload;
            const randomRoverImages = sampleSize(photos, 16);
            return { ...state, roverImages: randomRoverImages };
        case actions.RECEIVE_IMAGE_GALLERY_ERROR:
            const { payload } = action;
            return { ...state, error: payload }
        default:
            return state
    }
}

export default imageGalleryReducer;