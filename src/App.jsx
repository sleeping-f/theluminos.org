import { useState } from 'react'
import FirstDivLanding from './components/firstdivLanding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstDivLanding />
    </>
  )
}

export default App
