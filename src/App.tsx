import LaunchList from './components/SideMenu'
import LaunchHeader from './components/Header/LaunchHeader'
import { Layout } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './AppRoutes'

import './App.css'
import { useCallback, useState } from 'react'

function App() {
  const [id, setId] = useState(42)
  const handleIdChange = useCallback((newId: number) => {
    setId(newId)
  }, [])

  return (
    <Router>
      <div className="App">
        <LaunchList handleIdChange={handleIdChange} />
        <Layout className="site-layout">
          <LaunchHeader />
          <AppRoutes id={id} />
        </Layout>
      </div>
    </Router>
  )
}

export default App
