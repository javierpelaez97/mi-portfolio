import  './about.css'
import MySelf from '../../assets/images/IMG_8585 2.jpg'

export default function About(){

    return(
        <>
            <div className='bg-dark row text-center'>
                <div className='col text '>
                    <h1 >Me llamo <span className="highlighted"> Javier Pelaez</span> actualmente estoy centrado en mejorar mis habilidades como <span className='highlighted'>FullStack Developer</span>.</h1>
                </div>
                <div className='col'>
                    {/* <img src={MySelf} className='imgage'></img> */}
                </div>
            </div>
        </>
    )
}