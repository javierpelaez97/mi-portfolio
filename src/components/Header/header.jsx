import './header.css'

import LogoGit from '../../assets/images/25231.png'
import CV from '../../assets/documents/Javier Peláez CV Español.pdf'

export default function Header(){
    return(
        <>
            <div className="bg-dark  text-center ">
                <div className='row align-items-center'>
                    <div className='col'>
                            <a href='https://github.com/javierpelaez97' target='_blank'> 
                                <img src={LogoGit} className='logoGit '></img>  
                                
                            </a>
                        </div>
                        <div className='col name'>
                            <a href='www.linkedin.com/in/jpelaezg' target='_blank' className='name'> 
                                    Javier Pelaez 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                        <path d="M8 11l0 5" />
                                        <path d="M8 8l0 .01" />
                                        <path d="M12 16l0 -5" />
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                    </svg>
                            </a>
                        </div>
                        <div className='col'>
                            <button className='btn'>
                                <a href={CV} target="_blank" rel="noopener noreferrer" download="CV Javier Peláez.pdf" className='btn btn-dark'> 
                                    Descargar CV 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-down-lines" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z" />
                                        <path d="M15 3h-6" />
                                        <path d="M15 6h-6" />
                                    </svg>
                                </a>
                            </button>
                    </div>
                </div>
            </div>
            
        </>
    )
}