import * as actions from '../actions/types'

const initialState = {
    objectUrl: null,
    fetchError: false
}


const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_MUSIC: {
            const newState = {
                objectUrl: action.payload.objectUrl,
                fetchError: false
            }
            return newState;
        }
        case actions.ERROR_FETCHING_MUSIC: {
            const newState = {
                objectUrl: null,
                fetchError: true
            }
            return newState;
        }
        default: return state;
    }
}

export default musicReducer