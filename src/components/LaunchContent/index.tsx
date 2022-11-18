import { useEffect } from 'react'
import { useLaunchProfileQuery } from '../../generated/graphql'
import LaunchContent from './LaunchContent'

interface OwnProps {
  id: number
}

const LaunchProfileContainer = ({ id }: OwnProps) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  })

  useEffect(() => {
    refetch({ id: String(id) })
  }, [refetch, id])

  if (loading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>ERROR</div>
  }

  if (!data) {
    return <div>Select a flight from the panel</div>
  }

  return <LaunchContent data={data} />
}

export default LaunchProfileContainer
