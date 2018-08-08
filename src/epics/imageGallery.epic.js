import { ajax } from 'rxjs/observable/dom/ajax';
import { receiveImageGallery, receiveImageGalleryError } from '../actions/imageGallery.actions';
import * as actions from '../constants/actions';
import { NASA_API_KEY } from '../config';
import 'rxjs';


const fetchImageGallery = action$ =>
    action$.ofType(actions.REQUEST_IMAGE_GALLERY)
        .mergeMap(action => {
            return ajax.getJSON(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-10-16&api_key=${NASA_API_KEY}`)
                .map(response => receiveImageGallery(response))
                .catch(error => receiveImageGalleryError(error))
        }
        );

export default fetchImageGallery;