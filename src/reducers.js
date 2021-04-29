import { doomCreator } from './doomCreator'
import { MAKE_BAND } from './types'


const initialState = {
    bands:[]
}

let counter = 0

const rootReducer = ( state = initialState, action ) => {
    if ( action.type === MAKE_BAND ){
        counter++
        return Object.assign({}, state, {
            bands: state.bands.concat( { id: counter, name: doomCreator()})
        })
    }
    return state
}

export default rootReducer