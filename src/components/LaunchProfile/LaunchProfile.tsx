import { LaunchProfileQuery } from '../../generated/graphql'
import LaunchProfileGallery from './LaunchProfileGallery'
import './styles.css'

interface Props {
  data: LaunchProfileQuery
}

const className = 'LaunchProfile'

const LaunchProfile = ({ data }: Props) => {
  if (!data.launch) {
    return <div>No launch available</div>
  }

  const { flight_number, launch_success, mission_name, rocket, details } =
    data?.launch
  const images = data?.launch?.links?.flickr_images

  return (
    <div className={className}>
      <div className={`${className}__status`}>
        <span>Flight {flight_number}: </span>
        {launch_success ? (
          <span className={`${className}__success`}>Success</span>
        ) : (
          <span className={`${className}__failed`}>Failed</span>
        )}
      </div>
      <h1 className={`${className}__title`}>
        {mission_name}
        {rocket && ` (${rocket.rocket_name} | ${rocket.rocket_type})`}
      </h1>
      <p className={`${className}__description`}>{details}</p>
      <LaunchProfileGallery images={images} classname={className} />
    </div>
  )
}

export default LaunchProfile
