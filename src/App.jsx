import { useState } from 'react'
import FirstSectionLanding from './components/firstSectionLanding'
import SecondSection from './components/secondSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstSectionLanding />
      <SecondSection />
    </>
  )
}

export default App
