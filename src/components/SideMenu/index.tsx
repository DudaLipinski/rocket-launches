import { useLaunchListQuery } from '../../generated/graphql'
import SideMenu, { OwnProps } from './SideMenu'

const LaunchListContainer = ({ handleIdChange }: OwnProps) => {
  const { data, error, loading } = useLaunchListQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error</div>
  }

  return <SideMenu data={data} handleIdChange={handleIdChange} />
}

export default LaunchListContainer
