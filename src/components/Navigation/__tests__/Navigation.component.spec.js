import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'

import Navigation from '../Navigation.component';

const context = { router: { isActive: (a, b) => true } };


describe('<Navigation />', () => {
    it('renders correctly', () => {
        const component = renderer.create(
            <StaticRouter context={context}>
                <Navigation />
            </StaticRouter>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

