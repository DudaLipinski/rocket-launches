/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home/Home'
import LaunchProfileContainer from './components/LaunchContent'

interface Props {
  id: number | undefined
  handleIdChange: (newId: number) => void
}

function AppRoutes({ id, handleIdChange }: Props) {
  const location = useLocation()

  const { pathname } = location

  const urlLaunchesWord = pathname.split('/')[1]
  const urlIdLaunch = pathname.split('/')[2]

  if (urlLaunchesWord === 'launches') {
    handleIdChange(Number(urlIdLaunch))
  }

  return (
    <Routes>
      {id ? (
        <>
          <Route
            path="/launches/:id/:mission_name"
            element={<LaunchProfileContainer id={id} />}
          />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </>
      )}
    </Routes>
  )
}

export default AppRoutes
