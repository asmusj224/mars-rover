import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

import ImageOfTheDay from '../ImageOfTheDay.container';

const middlewares = [];
const mockStore = configureMockStore(middlewares);
const initialState = {
    imageOfTheDay: {
        roverImage: '',
        roverName: '',
        roverCameraName: ''
    }
};
const store = mockStore(initialState);


describe('<ImageOfTheDay />', () => {
    it('renders correctly', () => {
        const component = renderer.create(
            <Provider store={store}>
                <ImageOfTheDay />
            </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});