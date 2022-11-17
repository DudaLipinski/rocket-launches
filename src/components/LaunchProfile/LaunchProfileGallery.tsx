import { Image } from 'antd'
import styled from 'styled-components'

const LaunchesImages = styled(Image)`
  width: 400px;
  height: 400px;
  margin: 5px;
  object-fit: cover;
  object-position: top;
`

interface Props {
  images: (string | null)[] | null | undefined
}

const LaunchProfileGallery = ({ images }: Props) => {
  if (images?.length) {
    return (
      <Image.PreviewGroup>
        {images.map((image, i) => (
          <LaunchesImages key={image} alt={`${i}`} src={`${image}`} />
        ))}
      </Image.PreviewGroup>
    )
  } else {
    return <p>No images :(</p>
  }
}

export default LaunchProfileGallery
