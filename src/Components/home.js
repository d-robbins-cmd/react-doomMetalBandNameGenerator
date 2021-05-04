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
        <div id="container">


        <audio src='../audio/doom.mp3' autoPlay loop type="audio"></audio>



            <div className="vertical-center">
                <div id="banner">Doom metal band generator</div>
            </div>  
            <form className="form" onSubmit={ handleDoomSubmit }>
                <div className="col text-center">
                    <button id="button" className="btn btn-dark" type="submit">generate</button>
                </div>
            </form> 
        
            <h1 id="band">{ selector.name }</h1>
           
        </div>
    )
}


export default Home 