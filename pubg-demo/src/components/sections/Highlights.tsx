import { useState } from 'react'
import { highlights } from '../../assets/data/highlights'
import VideoCard from '../ui/VideoCard'

const Highlights = () => {
  const [openId, setOpenId] = useState<string | null>(null)
  const current = highlights.find(h => h.id === openId) || null
  return (
    <div className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <h2 className="title-lg">高光集锦</h2>
            <p className="muted" style={{ marginTop: 6 }}>枪声即号角，推进即命令</p>
          </div>
        </div>
        <div className="grid highlight-grid">
          {highlights.map(h => (
            <VideoCard key={h.id} title={h.title} desc={h.desc} cover={h.cover} onClick={() => setOpenId(h.id)} />
          ))}
        </div>
      </div>

      {current && (
        <div className="overlay" onClick={() => setOpenId(null)}>
          <div className="overlay-inner" onClick={e => e.stopPropagation()}>
            <div className="overlay-header">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="title-md">{current.title}</div>
                <div className="muted" style={{ marginTop: 4 }}>{current.desc}</div>
              </div>
              <button className="icon-btn" onClick={() => setOpenId(null)}>✕</button>
            </div>
            <div className="overlay-body">
              <video src={current.video} controls autoPlay playsInline style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Highlights
