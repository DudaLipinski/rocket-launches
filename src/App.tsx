import LaunchList from './components/LaunchMenu'
import LaunchProfile from './components/LaunchContent'
import LaunchHeader from './components/LaunchHeader/LaunchHeader'
import { Layout } from 'antd'

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
      <Layout className="site-layout">
        <LaunchHeader />
        <LaunchProfile id={id} />
      </Layout>
    </div>
  )
}

export default App
