import LaunchList from './components/LaunchList'
import LaunchProfile from './components/LaunchProfile'

import './App.css'
import { useCallback, useState } from 'react'

function App() {
  const [id, setId] = useState(42)
  const handleIdChange = useCallback((newId: number) => {
    setId(newId)
  }, [])

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  )
}

export default App
