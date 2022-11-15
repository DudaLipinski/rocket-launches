import React from 'react'

interface Props {
  images: (string | null)[] | null | undefined
  classname: string
}

const LaunchProfileGallery = ({ images, classname }: Props) => {
  if (images?.length) {
    return (
      <div className={`${classname}__image-list`}>
        {images.map((image, i) => (
          <img
            className={`${classname}__image`}
            key={image}
            alt={`${i}`}
            src={`${image}`}
          />
        ))}
      </div>
    )
  } else {
    return <p>No images</p>
  }
}

export default LaunchProfileGallery
