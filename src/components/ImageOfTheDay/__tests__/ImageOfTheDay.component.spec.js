import React from 'react';
import renderer from 'react-test-renderer';

import ImageGallery from '../ImageOfTheDay.component';

describe('<ImageGallery />', () => {
    it('renders correctly', () => {
        const component = renderer.create(
            <ImageGallery
                roverImage='roverImage'
                roverName='roverName'
                roverCameraName='roverCameraName' />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

