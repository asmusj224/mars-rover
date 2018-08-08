import { REQUEST_IMAGE_GALLERY, RECEIVE_IMAGE_GALLERY, RECEIVE_IMAGE_GALLERY_ERROR } from '../../constants/actions';
import * as actions from '../imageGallery.actions';


describe('Image Gallery Actions', () => {
    it('requestImageGallery', () => {
        const expectedAction = {
            type: REQUEST_IMAGE_GALLERY
        }
        expect(actions.requestImageGallery()).toMatchSnapshot();
    });

    it('receiveImageGallery', () => {
        const expectedAction = {
            type: RECEIVE_IMAGE_GALLERY,
            payload: ''
        }
        expect(actions.receiveImageGallery('')).toMatchSnapshot();
    });

    it('receiveImageGalleryError', () => {
        const expectedAction = {
            type: RECEIVE_IMAGE_GALLERY_ERROR,
            payload: ''
        }
        expect(actions.receiveImageGalleryError('')).toMatchSnapshot();
    });
});