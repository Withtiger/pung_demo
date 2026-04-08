import { profile } from '../../assets/data/profile'

const Hero = () => {
  const handleScroll = () => {
    const el = document.getElementById('highlights')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="container hero-inner fade-in">
        <div className="hero-meta">
          <span className="badge">
            <span style={{ width: 6, height: 6, background: 'linear-gradient(135deg,var(--primary),#2ad3ff)', borderRadius: 2 }} />
            PUBG Highlight
          </span>
          <span className="muted">个人高燃作品集</span>
        </div>
        <h1 className="title-xl">{profile.nickname}</h1>
        <p style={{ marginTop: 10, maxWidth: 680, color: 'var(--muted)', fontSize: 18 }}>{profile.tagline}</p>
        <div className="hero-cta">
          <button className="btn" onClick={handleScroll}>立即观战</button>
          <a className="btn btn-outline" href="#about">了解我</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
