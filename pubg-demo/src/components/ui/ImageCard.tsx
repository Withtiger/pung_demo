type Props = {
  src: string
  alt?: string
}

const ImageCard = ({ src, alt }: Props) => {
  return (
    <div className="card">
      <div className="media-cover" style={{ aspectRatio: '4 / 3' }}>
        <img src={src} alt={alt || ''} />
      </div>
    </div>
  )
}

export default ImageCard
