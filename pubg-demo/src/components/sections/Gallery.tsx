import { gallery } from '../../assets/data/gallery'
import ImageCard from '../ui/ImageCard'

const Gallery = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="title-lg">素材图库</h2>
        <p className="muted" style={{ marginTop: 6, marginBottom: 14 }}>战场定格，片刻即永恒</p>
        <div className="grid gallery-grid">
          {gallery.map((g, i) => (
            <ImageCard key={i} src={g.src} alt={g.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
