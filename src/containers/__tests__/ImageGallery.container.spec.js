import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

import ImageGallery from '../ImageGallery.container';

const middlewares = [];
const mockStore = configureMockStore(middlewares);
const initialState = {
    imageGallery: {
        roverImages: []
    }
};
const store = mockStore(initialState);


describe('<ImageGallery />', () => {
    it('renders correctly', () => {
        const component = renderer.create(
            <Provider store={store}>
                <ImageGallery />
            </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});