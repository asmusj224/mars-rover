import { REQUEST_IMAGE_OF_THE_DAY, RECEIVE_IMAGE_OF_THE_DAY, RECEIVE_IMAGE_OF_THE_DAY_ERROR } from '../constants/actions';

export const requestImageOfTheDay = () => ({ type: REQUEST_IMAGE_OF_THE_DAY });
export const receieveImageOfTheDay = (payload) => ({ type: RECEIVE_IMAGE_OF_THE_DAY, payload });
export const receieveImageOfTheDayError = (payload) => ({ type: RECEIVE_IMAGE_OF_THE_DAY_ERROR, payload });
