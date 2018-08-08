import { REQUEST_IMAGE_GALLERY, RECEIVE_IMAGE_GALLERY, RECEIVE_IMAGE_GALLERY_ERROR } from '../constants/actions';

export const requestImageGallery = () => ({ type: REQUEST_IMAGE_GALLERY });
export const receiveImageGallery = (payload) => ({ type: RECEIVE_IMAGE_GALLERY, payload });
export const receiveImageGalleryError = (payload) => ({ type: RECEIVE_IMAGE_GALLERY_ERROR, payload });