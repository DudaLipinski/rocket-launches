import { Breadcrumb, Layout } from 'antd'
import { LaunchProfileQuery } from '../../generated/graphql'
import LaunchProfileGallery from './LaunchGallery'
import { Link } from 'react-router-dom'
const { Content } = Layout

interface Props {
  data: LaunchProfileQuery
}

const LaunchContent = ({ data }: Props) => {
  if (!data.launch) {
    return <div>No launch available</div>
  }

  const { flight_number, launch_success, mission_name, rocket, details } =
    data?.launch
  const images = data?.launch?.links?.flickr_images

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{mission_name}</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <span>Flight {flight_number}: </span>
        {launch_success ? <span>Success</span> : <span>Failed</span>}
        <h1>
          {mission_name}
          {rocket && ` (${rocket.rocket_name} | ${rocket.rocket_type})`}
        </h1>
        <p>{details}</p>
        <LaunchProfileGallery images={images} />
      </div>
    </Content>
  )
}

export default LaunchContent
