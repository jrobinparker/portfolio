import React from 'react';
import Flickity from 'react-flickity-component';

export default function SiteImages(props) {

  const images = props.images.map((img, i) => {
    return <img src={`${img}`} />
  })

  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true
}

  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {images}
    </Flickity>
  )
}
