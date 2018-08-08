import React from 'react';
import renderer from 'react-test-renderer';

import ImageGallery from '../ImageGallery.component';

const roverImages = [{
    "id": 634105,
    "sol": 1847,
    "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
    },
    "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01847/opgs/edr/fcam/FLB_561457773EDR_F0661516FHAZ00341M_.JPG",
    "earth_date": "2017-10-16",
    "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 2134,
        "max_date": "2018-08-07",
        "total_photos": 340100,
        "cameras": [
            {
                "name": "FHAZ",
                "full_name": "Front Hazard Avoidance Camera"
            },
            {
                "name": "NAVCAM",
                "full_name": "Navigation Camera"
            },
            {
                "name": "MAST",
                "full_name": "Mast Camera"
            },
            {
                "name": "CHEMCAM",
                "full_name": "Chemistry and Camera Complex"
            },
            {
                "name": "MAHLI",
                "full_name": "Mars Hand Lens Imager"
            },
            {
                "name": "MARDI",
                "full_name": "Mars Descent Imager"
            },
            {
                "name": "RHAZ",
                "full_name": "Rear Hazard Avoidance Camera"
            }
        ]
    }
}]

describe('<ImageGallery />', () => {
    it('renders correctly', () => {
        const component = renderer.create(
            <ImageGallery roverImages={roverImages} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});