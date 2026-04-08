import { useEffect, useRef, useState } from 'react'

export const useBgm = (src: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(0.6)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audio.muted = true // 默认静音
    audio.volume = volume
    audioRef.current = audio

    // 尝试自动播放（静音）
    audio.play().then(() => {
      setPlaying(true)
    }).catch(error => {
      console.warn('BGM autoplay failed (muted):', error)
      setPlaying(false)
    })

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [src])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const toggle = async () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.muted = muted // 保持当前静音状态
      await audioRef.current.play().catch(() => {})
      setPlaying(true)
    }
  }

  const setMute = (m: boolean) => {
    if (!audioRef.current) return
    audioRef.current.muted = m
    setMuted(m)
    if (!m && !playing) { // 如果取消静音且当前未播放，则尝试播放
      audioRef.current.play().catch(() => {})
      setPlaying(true)
    }
  }

  return { audioRef, playing, muted, volume, setVolume, toggle, setMute }
}
