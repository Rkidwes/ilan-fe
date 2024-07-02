import Image from 'next/image'

const BackgroundImage = ({image, opacity = 1}) => {

  return (
    <Image 
      src={image} 
      alt=""
      fill
      sizes='100vw'
      priority
      style={{objectFit: "cover", opacity: opacity}}
    />
  )
}

export default BackgroundImage;