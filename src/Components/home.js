import { useSelector, useDispatch } from 'react-redux'
import { MAKE_BAND } from '../types'
import 'bootstrap/dist/css/bootstrap.css'
import ReactAudioPlayer from 'react-audio-player'
import mp3_file from '../audio/doom.mp3';


const Home = () => {

    const selector = useSelector ( state => state )
    const dispatch = useDispatch()

    const handleDoomSubmit = e => {
        e.preventDefault()
        dispatch({ type: MAKE_BAND, payload: '' })
    }

    return(
        <div id="container">

            <ReactAudioPlayer
                src={ mp3_file }
                autoPlay loop
            />

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