import { REQUEST_IMAGE_OF_THE_DAY, RECEIVE_IMAGE_OF_THE_DAY, RECEIVE_IMAGE_OF_THE_DAY_ERROR } from '../../constants/actions';
import * as actions from '../imageOfTheDay.actions';


describe('Image Of The Day Actions', () => {
    it('requestImageOfTheDay', () => {
        const expectedAction = {
            type: REQUEST_IMAGE_OF_THE_DAY
        }
        expect(actions.requestImageOfTheDay()).toMatchSnapshot();
    });

    it('receiveImageGallery', () => {
        const expectedAction = {
            type: RECEIVE_IMAGE_OF_THE_DAY,
            payload: ''
        }
        expect(actions.receieveImageOfTheDay('')).toMatchSnapshot();
    });

    it('receiveImageGalleryError', () => {
        const expectedAction = {
            type: RECEIVE_IMAGE_OF_THE_DAY_ERROR,
            payload: ''
        }
        expect(actions.receieveImageOfTheDayError('')).toMatchSnapshot();
    });
});