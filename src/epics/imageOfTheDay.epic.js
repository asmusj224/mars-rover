import { ajax } from 'rxjs/observable/dom/ajax';
import { receieveImageOfTheDay, receieveImageOfTheDayError } from '../actions/imageOfTheDay.actions';
import * as actions from '../constants/actions';
import { NASA_API_KEY } from '../config';
import 'rxjs';


const fetchImageOfTheDayEpic = action$ =>
    action$.ofType(actions.REQUEST_IMAGE_OF_THE_DAY)
        .mergeMap(action => {
            return ajax.getJSON(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${NASA_API_KEY}`)
                .map(response => receieveImageOfTheDay(response))
                .catch(error => receieveImageOfTheDayError(error))
        }
        );

export default fetchImageOfTheDayEpic;