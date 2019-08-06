import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function SiteImages(props) {

  const images = props.images.map((img, i) => {
    return <img src={`${img}`} />
  })

  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true
}

  return (
    <AliceCarousel>
      {images}
    </AliceCarousel>
  )
}
