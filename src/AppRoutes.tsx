import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import LaunchProfileContainer from './components/LaunchContent'

interface Props {
  id: number
}

function AppRoutes({ id }: Props) {
  return (
    <Routes>
      <Route
        path="/launches/:id"
        element={<LaunchProfileContainer id={id} />}
      />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
