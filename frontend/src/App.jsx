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
      <section id="services">
        <OurServices />
      </section>
      <HeartAhhdiv />
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  )
}

export default App
