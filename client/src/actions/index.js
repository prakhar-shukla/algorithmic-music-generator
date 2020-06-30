import * as actions from './types';
import axios from 'axios'




export const fetchStart = () => {
    return {
        type: actions.MUSIC_FETCH_START
    }
}

export const fetchLoading = () => {
    return {
        type: actions.MUSIC_FETCH_LOADING
    }
}

export const fetchSuccess = (objectUrl) => {
    return {
        type: actions.MUSIC_FETCH_SUCCESS,
        payload: {
            objectUrl: objectUrl
        }
    }
}

export const fetchError = () => {
    return {
        type: actions.MUSIC_FETCH_ERROR
    }
}


export const generateMusic = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        fetch('/api/generate').then(response => {
            dispatch(fetchLoading());
            return response.blob();
        }).then(data => {
            let objectUrl = window.URL.createObjectURL(data);
            dispatch(fetchSuccess(objectUrl));
        }).catch(error => {
            dispatch(fetchError());
        })
    }
}