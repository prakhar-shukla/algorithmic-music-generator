import * as actions from './types';
import axios from 'axios'


export const setMusic = (objectUrl) => {
    return {
        type: actions.SET_MUSIC,
        payload: {
            objectUrl: objectUrl
        }
    }
}

export const fetchError = () => {
    return {
        type: actions.ERROR_FETCHING_MUSIC
    }
}


export const generateMusic = () => {
    return (dispatch) => {
        fetch('/api/generate').then(response => {
            return response.blob();
        }).then(data => {
            let objectUrl = window.URL.createObjectURL(data);
            dispatch(setMusic(objectUrl));
        }).catch(error => {
            dispatch(fetchError());
        })
    }
}