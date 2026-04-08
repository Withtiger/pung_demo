import { profile } from '../../assets/data/profile'

const About = () => {
  return (
    <div className="section">
      <div className="container about">
        <div className="card" style={{ padding: 18 }}>
          <div className="badge" style={{ marginBottom: 10 }}>About Me</div>
          <div className="title-lg" style={{ marginBottom: 8 }}>{profile.nickname}</div>
          <div className="muted" style={{ marginBottom: 12 }}>{profile.tagline}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {profile.mainTags.map((t, i) => (
              <span key={i} className="badge">{t}</span>
            ))}
          </div>
        </div>
        <div className="card" style={{ padding: 18 }}>
          <div className="title-md" style={{ marginBottom: 8 }}>比赛气质</div>
          <p className="muted" style={{ margin: 0, lineHeight: 1.65 }}>
            以战场信息为核心，以执行力为利刃。推进果断，狙击干脆，节奏掌控在枪口与耳机之间。高压下保持冷静，瞬时决策是常态。
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
