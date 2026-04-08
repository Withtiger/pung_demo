const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>© {new Date().getFullYear()} PUBG Highlight Demo</span>
        <span className="muted">为热血与团队而战</span>
      </div>
    </footer>
  )
}

export default Footer
