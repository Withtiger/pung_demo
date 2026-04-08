import { profile } from '../../assets/data/profile'

const Contact = () => {
  return (
    <div className="section">
      <div className="container contact">
        <div className="card" style={{ padding: 18 }}>
          <div className="title-lg" style={{ marginBottom: 8 }}>联系我</div>
          <div className="muted" style={{ marginBottom: 12 }}>合作、连麦、战术复盘</div>
          <div style={{ display: 'grid', gap: 8 }}>
            <div>
              <div className="title-sm">抖音昵称</div>
              <div>{profile.douyinName}</div>
            </div>
            <div>
              <div className="title-sm">抖音号</div>
              <div>{profile.douyinId}</div>
            </div>
          </div>
        </div>
        <div className="card" style={{ padding: 18 }}>
          <div className="title-md" style={{ marginBottom: 8 }}>社媒</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a className="btn btn-outline" href=" https://v.douyin.com/VFnvuIxKeyU/ 1@9.com :7pm" aria-label="Douyin">抖音</a>
            <a className="btn btn-outline" href="https://space.bilibili.com/273076187" aria-label="Bilibili">B站</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
