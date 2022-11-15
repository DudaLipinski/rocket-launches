import { LaunchListQuery } from '../../generated/graphql'
import './styles.css'

export interface OwnProps {
  handleIdChange: (newId: number) => void
}
interface Props extends OwnProps {
  data: LaunchListQuery
}

const className = 'LaunchList'

const LaunchList = ({ data, handleIdChange }: Props) => {
  return (
    <div className={className}>
      <h3>Launches</h3>
      <div className={`${className}__list`}>
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <p
                  key={i}
                  className={`${className}__item`}
                  onClick={() => handleIdChange(launch.flight_number!)}
                >
                  {launch.mission_name} {launch.launch_year}
                </p>
              )
          )}
      </div>
    </div>
  )
}

export default LaunchList
