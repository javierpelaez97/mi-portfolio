
import './App.css'
import AboutMe from './components/AboutMe/aboutMe'

import Intro from './components/Intro/intro'
import Projects from './components/Projects/projects'
import Header from './components/header/header'



function App() {
  

  return (
    <>
    <div className='font'>
      <Header></Header>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
      
    
      
    </>
  )
}

export default App
