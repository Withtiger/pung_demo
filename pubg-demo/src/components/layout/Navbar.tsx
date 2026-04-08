import { profile } from '../../assets/data/profile'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="brand">
          <div className="avatar-wrapper">
            <img src="/images/avatar.jpg" alt={profile.nickname} className="brand-avatar" />
          </div>
          <span>{profile.nickname}</span>
        </div>
        <div className="nav-links">
          <a href="#highlights">高光</a>
          <a href="#gallery">图库</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
