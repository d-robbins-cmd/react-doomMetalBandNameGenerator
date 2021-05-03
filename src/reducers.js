import { doomCreator } from './doomCreator'
import { MAKE_BAND } from './types'

const initialState = {
    name:[]
}

const rootReducer = ( state = initialState, action ) => {
    if ( action.type === MAKE_BAND ){
        return {
            name: doomCreator() 
        }
    }
    return state
}

export default rootReducer