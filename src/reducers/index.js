import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import ImageOfTheDayReducer from './imageOfTheDay.reducer';
import ImageGalleryReducer from './imageGallery.reducer';
import ImageOfTheDayEpic from '../epics/imageOfTheDay.epic';
import ImageGalleryEpic from '../epics/imageGallery.epic';

export const rootReducer = combineReducers({
    imageOfTheDay: ImageOfTheDayReducer,
    imageGallery: ImageGalleryReducer
});

export const rootEpic = combineEpics(
    ImageOfTheDayEpic,
    ImageGalleryEpic
);