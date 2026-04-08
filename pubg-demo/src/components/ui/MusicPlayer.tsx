import { useBgm } from '../../hooks/useBgm'

const MusicPlayer = () => {
  const { playing, muted, volume, setVolume, toggle, setMute } = useBgm('/audio/bgm-main.mp3')
  return (
    <div className="music">
      <button className="icon-btn" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
        {playing ? '⏸' : '▶'}
      </button>
      <button className="icon-btn" onClick={() => setMute(!muted)} aria-label={muted ? 'Unmute' : 'Mute'}>
        {muted ? '🔇' : '🔊'}
      </button>
      <input
        className="volume"
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={volume}
        onChange={e => setVolume(parseFloat(e.target.value))}
      />
    </div>
  )
}

export default MusicPlayer
