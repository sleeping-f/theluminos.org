import { useState } from 'react'
import FirstSectionLanding from './components/firstSectionLanding'
import SecondSection from './components/secondSection'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstSectionLanding />
      <SecondSection />
	  <Footer />
    </>
  )
}

export default App
