import  './intro.css'

import Emoji from '../../assets/images/IMG_9294.png'
import ButtonCV from '../Buttons/buttonCV'
import ButtonContact from '../Buttons/buttonContact'

export default function Intro(){

    return(
        <>
            <div className='bg-dark text-center margin '>
            <div className='container'>
            <div className='row'>
                <div className='col text '>
                    <h1 >Me llamo <span className="text-warning"> Javier Pelaez</span> actualmente estoy centrado en mejorar mis habilidades como <span className='text-warning'>FullStack Developer</span>.</h1>
                    <div className='row'>
                        <div className='col'>
                            <ButtonCV></ButtonCV>
                        </div>
                        <div className='col'>
                            <ButtonContact></ButtonContact>
                        </div>
                        
                    </div>
                </div>
                <div className='col'>
                    <img src={Emoji}  ></img>
                </div>
                </div>

            </div>
            
            </div>
        </>
    )
}