import { useState } from 'react'
import FirstSectionLanding from './components/firstSectionLanding'
import SecondSection from './components/secondSection'
import Footer from './components/Footer/Footer'
import HeartAhhdiv from './components/HeartAhhDiv/HeartAhhdiv'
import ProjectSection from './components/Projectsection/projectsection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstSectionLanding />
      <SecondSection />
      <HeartAhhdiv />
      <ProjectSection /> 
	  <Footer />
    </>
  )
}

export default App
