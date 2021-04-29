import { useSelector, useDispatch } from 'react-redux'
import { MAKE_BAND } from '../types'
import 'bootstrap/dist/css/bootstrap.css'


const Home = () => {

    const selector = useSelector ( state => state )
    const dispatch = useDispatch()

    const handleDoomSubmit = e => {
        e.preventDefault()
        dispatch({ type: MAKE_BAND, payload: '' })
    }

    return(
        <>
        <div className="row">
            <div id="text">
                <h3>Me Too!</h3>
            </div>
        </div>


            <form onSubmit={ handleDoomSubmit }>
                <button id="submitButton" type="submit">submit</button>
            </form> 



             <ul>
                {
                    selector.bands.map( band => <li key={ band.id }>{ band.name }</li>) 
                }
            </ul>
       </> 
        
    )
}


export default Home 