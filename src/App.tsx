import LaunchList from './components/SideMenu'
import Header from './components/Header/Header'
import { Layout } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './AppRoutes'

import './App.css'
import { useCallback, useState } from 'react'

function App() {
  const [id, setId] = useState<number | undefined>()
  const handleIdChange = useCallback((newId: number) => {
    setId(newId)
  }, [])

  return (
    <Router>
      <div className="App">
        <LaunchList handleIdChange={handleIdChange} />
        <Layout className="site-layout">
          <Header handleIdChange={handleIdChange} />
          <AppRoutes id={id} handleIdChange={handleIdChange} />
        </Layout>
      </div>
    </Router>
  )
}

export default App
