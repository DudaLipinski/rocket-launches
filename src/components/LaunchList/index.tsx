import { useLaunchListQuery } from '../../generated/graphql'
import LaunchList, { OwnProps } from './LaunchList'

const LaunchListContainer = ({ handleIdChange }: OwnProps) => {
  const { data, error, loading } = useLaunchListQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error</div>
  }

  return <LaunchList data={data} handleIdChange={handleIdChange} />
}

export default LaunchListContainer
