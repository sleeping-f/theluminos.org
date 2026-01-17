import { useState } from 'react'
import FirstSectionLanding from './components/firstSectionLanding'
import OurServices from './components/OurServices'
import Footer from './components/Footer/Footer'
import HeartAhhdiv from './components/HeartAhhDiv/HeartAhhdiv'
import ProjectSection from './components/Projectsection/projectsection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstSectionLanding />
      <OurServices />
      <HeartAhhdiv />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default App
