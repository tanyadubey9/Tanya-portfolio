import './App.css'
import Navbar from './components/Navbar'
import Summary from './components/Summary'
import Education from './components/Education'
import Project from './components/Projects'
import Skills from './components/Skills'
import Info from './components/Info'

function App() {
  return (
    <>
      <Navbar />
      <div id='home'><Summary /></div>
      <div id='education'><Education /></div>
      <div id='project'><Project /></div>
      <div id='skills'><Skills /></div>
      <div id='contact'><Info /></div>
    </>
  )
}

export default App
