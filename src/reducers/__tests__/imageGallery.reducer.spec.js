import reducer from '../imageGallery.reducer';
import * as actions from '../../constants/actions';

describe('Image Gallery Reducer', () => {
    it('should return intial state', () => {
        expect(reducer(undefined, {})).toMatchSnapshot();
    });
    it('should handle RECEIVE_IMAGE_GALLERY', () => {
        expect(reducer([], { type: actions.RECEIVE_IMAGE_GALLERY, payload: [] })).toMatchSnapshot();
    });
    it('should handle RECEIVE_IMAGE_GALLERY_ERROR', () => {
        expect(reducer([], { type: actions.RECEIVE_IMAGE_GALLERY_ERROR, payload: [] })).toMatchSnapshot();
    });
});