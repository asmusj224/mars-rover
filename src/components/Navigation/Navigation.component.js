import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.component.css';
import * as routes from '../../constants/routes';

const Navigation = () => (
    <div className="navigation">
        <h2><Link className="navigation__link navigation__link--black" to={routes.IMAGE_OF_THE_DAY}>Mars Rover</Link></h2>
        <ul className="navigation__list">
            <li className="navigation__item"><Link className="navigation__link navigation__link--gray" to={routes.IMAGE_OF_THE_DAY}>Image of the day</Link></li>
            <li className="navigation__item"><Link className="navigation__link navigation__link--gray" to={routes.IMAGE_GALLERY}>Image Gallery</Link></li>
        </ul>
    </div>
);

export default Navigation;;