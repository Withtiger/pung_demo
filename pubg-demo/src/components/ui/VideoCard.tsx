type Props = {
  title: string
  desc: string
  cover: string
  onClick: () => void
}

const VideoCard = ({ title, desc, cover, onClick }: Props) => {
  return (
    <div className="card fade-in" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="media-cover">
        <img src={cover} alt={title} />
        <span className="play-badge">▶ 播放</span>
      </div>
      <div className="media-info">
        <div className="title-md">{title}</div>
        <div className="muted" style={{ marginTop: 6 }}>{desc}</div>
      </div>
    </div>
  )
}

export default VideoCard
