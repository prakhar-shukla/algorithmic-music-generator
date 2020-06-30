import * as actions from '../actions/types'

const initialState = {
    objectUrl: null,
    generating: false,
    loading: false,
    success: false,
    error: false
}


const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.MUSIC_FETCH_START: {
            const newState = {
                objectUrl: null,
                generating: true,
                loading: false,
                success: false,
                error: false
            }
            return newState;
        }
        case actions.MUSIC_FETCH_LOADING: {
            const newState = {
                objectUrl: null,
                generating: false,
                loading: true,
                success: false,
                error: false
            }
            return newState;
        }
        case actions.MUSIC_FETCH_SUCCESS: {
            const newState = {
                objectUrl: action.payload.objectUrl,
                success: true,
                generating: false,
                loading: false,
                error: false
            }
            return newState;
        }
        case actions.MUSIC_FETCH_ERROR: {
            const newState = {
                objectUrl: null,
                success: false,
                generating: false,
                loading: false,
                error: true
            }
            return newState;
        }
        default: return state;
    }
}

export default musicReducer