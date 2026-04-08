export type Highlight = {
  id: string
  title: string
  desc: string
  cover: string
  video: string
}

export const highlights: Highlight[] = [
  {
    id: 'h1',
    title: '落地钢枪 三连收',
    desc: '无护甲近点极限换弹重开局，节奏起飞',
    cover: '/images/highlights/cover-1.jpg',
    video: '/videos/highlight-1.mp4'
  },
  {
    id: 'h2',
    title: '百米瞬狙 秒停红点',
    desc: '枪口稳定压制，车翻前一枪定生死',
    cover: '/images/highlights/cover-2.jpg',
    video: '/videos/highlight-2.mp4'
  },
  {
    id: 'h3',
    title: '四排指挥 刀锋推进',
    desc: '声东击西断后路，正面强切一波端',
    cover: '/images/highlights/cover-3.jpg',
    video: '/videos/highlight-3.mp4'
  }
]
